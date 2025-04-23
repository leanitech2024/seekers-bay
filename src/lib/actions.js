'use server';

import { mkdir, readdir } from 'fs/promises';
import { join } from 'path';
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
