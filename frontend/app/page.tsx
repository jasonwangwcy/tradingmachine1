"use client";
import { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

export default function Home() {
  const [symbol, setSymbol] = useState('');
  const [data, setData] = useState(null);

  const fetchCryptoData = async () => {
    const res = await axios.get(`http://localhost:8000/crypto/${symbol}`);
    setData(res.data);
  };

  return (
    <div>
      <input 
        type="text" 
        value={symbol} 
        onChange={(e) => setSymbol(e.target.value)} 
        placeholder="Enter crypto symbol" 
      />
      <button onClick={fetchCryptoData}>Fetch Data</button>

      {data && (
        <Line
          data={{
            labels: Object.keys(data),
            datasets: [{
              label: `${symbol} price`,
              data: Object.values(data),
            }],
          }}
        />
      )}
    </div>
  );
}