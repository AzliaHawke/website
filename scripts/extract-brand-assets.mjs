import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const source = path.resolve(
  "C:/Users/rgonz/.cursor/projects/c-Development-AzliaHawke-website/assets/c__Users_rgonz_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_logo-deb6efe7-f2d8-4b64-b770-dfc050b5051f.png",
);
const brandDir = path.resolve("public/brand");
const appDir = path.resolve("src/app");

await mkdir(brandDir, { recursive: true });

const logoMarkRegion = { left: 72, top: 382, width: 110, height: 102 };
const wordmarkRegion = { left: 225, top: 382, width: 400, height: 95 };

const logoMarkPath = path.join(brandDir, "logo-mark.png");
const wordmarkPath = path.join(brandDir, "wordmark.png");

await sharp(source).extract(logoMarkRegion).png().toFile(logoMarkPath);
await sharp(source).extract(wordmarkRegion).png().toFile(wordmarkPath);

const markMeta = await sharp(logoMarkPath).metadata();

for (const scale of [2, 3]) {
  await sharp(logoMarkPath)
    .resize(Math.round(markMeta.width * scale), Math.round(markMeta.height * scale), {
      kernel: sharp.kernel.lanczos3,
    })
    .png()
    .toFile(path.join(brandDir, `logo-mark@${scale}x.png`));
}

const wordMeta = await sharp(wordmarkPath).metadata();
await sharp(wordmarkPath)
  .resize(Math.round(wordMeta.width * 2), Math.round(wordMeta.height * 2), {
    kernel: sharp.kernel.lanczos3,
  })
  .png()
  .toFile(path.join(brandDir, "wordmark@2x.png"));

const lgWidth = 800;
const lgHeight = Math.round(wordMeta.height * (lgWidth / wordMeta.width));

await sharp(wordmarkPath)
  .resize(lgWidth, lgHeight, { kernel: sharp.kernel.lanczos3 })
  .sharpen({ sigma: 1, m1: 0.8, m2: 0.4 })
  .png()
  .toFile(path.join(brandDir, "wordmark-lg.png"));

await sharp(wordmarkPath)
  .resize(lgWidth * 2, lgHeight * 2, { kernel: sharp.kernel.lanczos3 })
  .sharpen({ sigma: 0.8, m1: 0.6, m2: 0.3 })
  .png()
  .toFile(path.join(brandDir, "wordmark-lg@2x.png"));

async function createAppIcon(size) {
  const padding = Math.round(size * 0.16);
  const markSize = size - padding * 2;

  const mark = await sharp(logoMarkPath)
    .resize(markSize, markSize, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      kernel: sharp.kernel.lanczos3,
    })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 24, g: 24, b: 27, alpha: 1 },
    },
  })
    .composite([{ input: mark, gravity: "centre" }])
    .png()
    .toBuffer();
}

const icon32 = await createAppIcon(32);
const icon180 = await createAppIcon(180);
const icon512 = await createAppIcon(512);

await sharp(icon32).toFile(path.join(brandDir, "favicon-32.png"));
await sharp(icon180).toFile(path.join(brandDir, "apple-touch-icon.png"));
await sharp(icon512).toFile(path.join(appDir, "icon.png"));
await sharp(icon32).toFile(path.join(appDir, "favicon.ico"));

console.log("Final assets created.");
console.log(`Logo mark: ${markMeta.width}x${markMeta.height}`);
console.log(`Wordmark: ${wordMeta.width}x${wordMeta.height}`);
