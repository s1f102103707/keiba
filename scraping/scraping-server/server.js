const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

app.get('/scrape', async (req, res) => {
  try {
    const url = 'https://db.netkeiba.com/race/202305040911/';
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);
    const tableHTML = $('table').html(); // tableタグの中身を取得

    res.send(tableHTML); // テーブルのHTMLをレスポンスとして送信
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
