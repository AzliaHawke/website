import sharp from "sharp";
import path from "node:path";

const source = path.resolve(
  "C:/Users/rgonz/.cursor/projects/c-Development-AzliaHawke-website/assets/c__Users_rgonz_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_logo-deb6efe7-f2d8-4b64-b770-dfc050b5051f.png",
);
const brandDir = path.resolve("public/brand");
const wordmarkRegion = { left: 225, top: 382, width: 400, height: 95 };

const native = await sharp(source).extract(wordmarkRegion).png().toBuffer();
const meta = await sharp(native).metadata();

await sharp(native).png().toFile(path.join(brandDir, "wordmark.png"));

await sharp(native)
  .resize(meta.width * 2, meta.height * 2, { kernel: sharp.kernel.lanczos3 })
  .png()
  .toFile(path.join(brandDir, "wordmark@2x.png"));

const lgWidth = 800;
const lgHeight = Math.round(meta.height * (lgWidth / meta.width));

await sharp(native)
  .resize(lgWidth, lgHeight, { kernel: sharp.kernel.lanczos3 })
  .sharpen({ sigma: 1, m1: 0.8, m2: 0.4 })
  .png()
  .toFile(path.join(brandDir, "wordmark-lg.png"));

await sharp(native)
  .resize(lgWidth * 2, lgHeight * 2, { kernel: sharp.kernel.lanczos3 })
  .sharpen({ sigma: 0.8, m1: 0.6, m2: 0.3 })
  .png()
  .toFile(path.join(brandDir, "wordmark-lg@2x.png"));

console.log(`Wordmark native: ${meta.width}x${meta.height}`);
console.log(`Wordmark lg: ${lgWidth}x${lgHeight}`);
