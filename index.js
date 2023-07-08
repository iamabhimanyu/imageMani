// index.js

const express = require('express');
const sharp = require('sharp');
const axios = require('axios');

const app = express();

app.get('/manipulate', async (req, res) => {
  try {
    const { url, width, height, crop, bw, format, float } = req.query;

    if (!url) {
      return res.status(400).json({ error: 'URL parameter is required' });
    }

    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const imageBuffer = response.data;

    let image = sharp(imageBuffer);

    if (width || height) {
      image = image.resize(Number(width), Number(height), { fit: crop ? sharp.fit.cover : sharp.fit.inside });
    }

    if (bw === 'true') {
      image = image.grayscale();
    }

    if (format) {
      image = image.toFormat(format);
    }

    const buffer = await image.toBuffer();
    const base64Image = buffer.toString('base64');

    const style = float ? `style="float: ${float};"` : '';

    const htmlResponse = `
      <html>
        <body>
          <img src="data:image/${format || 'jpeg'};base64,${base64Image}" ${style} />
        </body>
      </html>
    `;

    res.send(htmlResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during image manipulation' });
  }
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
