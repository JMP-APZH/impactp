import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [scrapedData, setScrapedData] = useState([]);

  useEffect(() => {
    const fetchScrapedData = async () => {
      try {
        const response = await fetch('/api/scraped-data');
        if (response.ok) {
          const data = await response.json();
          setScrapedData(data);
        } else {
          console.error('Failed to fetch scraped data:', response.status);
        }
      } catch (error) {
        console.error('An error occurred while fetching scraped data:', error);
      }
    };

    fetchScrapedData();
  }, []);

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <div>
      {/* Display the scraped data */}
      {scrapedData.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default HomePage


