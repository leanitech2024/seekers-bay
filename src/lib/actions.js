'use server';

import { mkdir, readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { getPlaiceholder } from 'plaiceholder';
import sharp from 'sharp';

export async function compressImage() {
  // read the file from public/annual-day-24-pics this path

  const dir = join(process.cwd(), 'public', 'annual-day-24-pics');
  const files = await readdir(dir);

  const imageFiles = files.filter((file) =>
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  const compressedImages = await Promise.all(
    imageFiles.map(async (file) => {
      const filePath = join(dir, file);

      // Create the compressed directory if it doesn't exist
      const compressedDir = join(dir, 'compressed');
      await mkdir(compressedDir, { recursive: true });

      const outputFilePath = join(dir, 'compressed', file);

      await sharp(filePath)
        .resize(800, 800, { fit: 'fill', withoutReduction: true }) // Resize to 800x800, maintaining aspect ratio
        .webp({ quality: 10 }) // Adjust the quality as needed
        .toFile(outputFilePath);

      return outputFilePath;
    })
  );
  return compressedImages;
}

export async function readImages() {
  const dir = join(process.cwd(), 'public', 'annual-day-24-pics');
  const files = await readdir(dir);

  const imageFiles = files.filter((file) =>
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  const imagePaths = imageFiles.map((imagePath) => {
    const id = crypto.randomUUID();
    // return `/annual-day-24-pics/${file}`;
    return {
      id: id,
      path: `/annual-day-24-pics/${imagePath}`,
    };
  });
  return imagePaths;
}

export async function readImagesWithBlurData() {
  const dir = join(process.cwd(), 'public', 'annual-day-24-pics');
  const files = await readdir(dir);

  const imageFiles = files.filter((file) =>
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  // const src = 'https://images.unsplash.com/photo-1621961458348-f013d219b50c';

  // const buffer = await fetch(src).then(async (res) =>
  //   Buffer.from(await res.arrayBuffer())
  // );

  // const { base64 } = await getPlaiceholder(buffer);

  // we have to return the image path and blurDataUrl
  const imagePaths = await Promise.all(
    imageFiles.map(async (filepath) => {
      const eachfilePath = join(dir, filepath);
      const file = await readFile(eachfilePath);
      const { base64 } = await getPlaiceholder(file);
      const id = crypto.randomUUID();
      return {
        id: id,
        path: `/annual-day-24-pics/${filepath}`,
        blurDataUrl: base64,
      };
    })
  );

  return imagePaths;

  // const imagePaths = imageFiles.map((filepath) => {
  //   // const eachfilePath = join(dir, filepath);

  //   // const file = await readFile(eachfilePath);
  //   // console.log(file);

  //   // const { base64 } = await getPlaiceholder(file);

  //   const id = crypto.randomUUID();
  //   // return `/annual-day-24-pics/${file}`;
  //   return {
  //     id: id,
  //     path: `/annual-day-24-pics/${filepath}`,
  //     // blurDataUrl: base64,
  //   };
  // });
  // return imagePaths;
}
