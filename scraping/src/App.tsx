import axios from 'axios';
import { useEffect, useState } from 'react';

const ScrapingComponent = () => {
  const [tableHTML, setTableHTML] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/scrape'); // サーバーのエンドポイントにリクエストを送る
        setTableHTML(response.data); // 取得したHTMLをStateに保存
        console.log(tableHTML);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: tableHTML }} />;
};

export default ScrapingComponent;
