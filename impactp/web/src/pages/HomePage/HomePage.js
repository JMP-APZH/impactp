import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [scrapedData, setScrapedData] = useState([]);

  // useEffect(() => {
  //   const fetchScrapedData = async () => {
  //     try {
  //       const response = await fetch('/api/scraped-data');
  //       if (response.ok) {
  //         const data = await response.json();
  //         setScrapedData(data);
  //       } else {
  //         console.error('Failed to fetch scraped data:', response.status);
  //       }
  //     } catch (error) {
  //       console.error('An error occurred while fetching scraped data:', error);
  //     }
  //   };

  //   fetchScrapedData();
  // }, []);

  const scrapeData = async () => {
    try {
      console.log('Hello from client :')
      // const response = await fetch('/api/src/services/scraping/scraped-data');
      const response = await fetch('/api/scraped-data');
      if (response.ok) {
        const data = await response.json();
        setScrapedData(data);
        console.log('Fetched data from client :', scrapedData)
      } else {
        console.error('Failed to fetch scraped data:', response.status);
      }
    } catch (error) {
      console.error('An error occurred while fetching scraped data:', error);
    }
  };

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <button onClick={scrapeData}>Scrape Dairy</button>
      <div>
      {/* Display the scraped data */}
      {scrapedData.map((item, index) => (
        <div key={index}>
          <p>Name: {item.nom}</p>
          <p>Price: {item.prix}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default HomePage


