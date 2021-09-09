// Import stylesheets
import './style.css';

import FastAverageColor from 'fast-average-color';

const fac = new FastAverageColor();

const swatch = document.getElementById('swatch');
const imageInput = document.getElementById('imageInput') as HTMLInputElement;

imageInput.addEventListener('input', async () => {
  const image = document.createElement('img');
  image.src = URL.createObjectURL(imageInput.files[0]);

  const averageColor = await fac.getColorAsync(image, {
    algorithm: 'dominant',
  });
  console.log(averageColor);

  swatch.style.setProperty('background', averageColor.hex);
});
