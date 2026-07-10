import sharp from "sharp";
import path from "node:path";

const source = path.resolve(
  "C:/Users/rgonz/.cursor/projects/c-Development-AzliaHawke-website/assets/c__Users_rgonz_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-4fa73ef5-1e6f-490e-a817-58742351f10f.png",
);
const brandDir = path.resolve("public/brand");
const appDir = path.resolve("src/app");

const trimmed = await sharp(source).trim({ threshold: 12 }).png().toBuffer();
const meta = await sharp(trimmed).metadata();

const baseHeight = 36;
const baseWidth = Math.round(meta.width * (baseHeight / meta.height));

await sharp(trimmed)
  .resize(baseWidth, baseHeight, { kernel: sharp.kernel.lanczos3 })
  .png()
  .toFile(path.join(brandDir, "logo-mark.png"));

await sharp(trimmed)
  .resize(baseWidth * 2, baseHeight * 2, { kernel: sharp.kernel.lanczos3 })
  .png()
  .toFile(path.join(brandDir, "logo-mark@2x.png"));

await sharp(trimmed).png().toFile(path.join(brandDir, "logo-mark@3x.png"));

const lgHeight = 192;
const lgWidth = Math.round(meta.width * (lgHeight / meta.height));

await sharp(trimmed)
  .resize(lgWidth, lgHeight, { kernel: sharp.kernel.lanczos3 })
  .sharpen({ sigma: 1.2, m1: 1, m2: 0.5 })
  .png()
  .toFile(path.join(brandDir, "logo-mark-lg.png"));

await sharp(trimmed)
  .resize(lgWidth * 2, lgHeight * 2, { kernel: sharp.kernel.lanczos3 })
  .sharpen({ sigma: 1, m1: 0.8, m2: 0.4 })
  .png()
  .toFile(path.join(brandDir, "logo-mark-lg@2x.png"));

async function createAppIcon(size) {
  const padding = Math.round(size * 0.14);
  const markSize = size - padding * 2;

  const mark = await sharp(trimmed)
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

console.log(`Logo mark base: ${baseWidth}x${baseHeight}`);
console.log(`Source trimmed: ${meta.width}x${meta.height}`);
