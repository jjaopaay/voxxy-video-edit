'use client';

import { useEffect, useState } from 'react';

const DataDisplay: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/hello')
      .then(response => response.text())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Hello from Next.js!</h1>
      <p>{data ? data : 'Loading...'}</p>
    </div>
  );
}

export default DataDisplay;
