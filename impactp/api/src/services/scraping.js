import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const express = require('express');
// import axios from 'axios';
const axios = require('axios');
// import cheerio from 'cheerio';
const cheerio = require('cheerio');

app.get('/scraped-data', async (req, res) => {
  try {
    const scrapedData = await scrapeData();
    await saveToDatabase(scrapedData);
    res.json(scrapedData);
  } catch (error) {
    console.log('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred while scraping the data.' });
  }
});

// Function to scrape the data
async function scrapeData() {
  const baseUrl = 'https://martinique.123-click.com';
  const initialUrl = `${baseUrl}/store/frais`;
  const scrapedData = []


// Function to fetch additional pages
async function fetchAdditionalPages(url) {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const $ = cheerio.load(response.data);

    const dairy0 = []
    $('div.product-list-affichage-mobile', response.data).each(function() {
              const nom = $(this).find('a').attr('title')
              const prix = $(this).find('p.price-full').text()

              const url = $(this).find('a').attr('href')
              const prixspecial = $(this).find('p.price-special').text()
              const img = $(this).find('img.owl-lazy').attr('data-src')
              const quantite = $(this).find('div.desc-small-text').text()
              // const quantite2 = $(this).find('div.poids-suffixe-holder').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll(' ', '')
              const quantite2 = $(this).find('div.poids-suffixe-holder').text().replace(/\n|\t| /g, '');
              // const prixunite = $(this).find('div.unity-price').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll(' ', '')
              const prixunite = $(this).find('div.unity-price').text().replace(/\n|\t| /g, '');
              const nutriscore = $(this).find('div.picto-item').find('img').attr('src')
              const web = 'https://martinique.123-click.com'
              const nutrifull = web.concat(nutriscore)

              dairy0.push({
                          nom,
                          prix,
                          url,
                          prixspecial,
                          img,
                          quantite,
                          quantite2,
                          prixunite,
                          nutriscore,
                          nutrifull


                      })

                    })
      let uniqueDairy0 = [...new Set(dairy0)]
      const productNames = uniqueDairy0

    console.log('from ProductNames fetch: ', productNames)

    // Adding scraped data to the final array
    addDataToFinalArray(productNames)

     // Checking if there are more items to load
     const nextPageUrl = getNextPageUrl($);
     if (nextPageUrl) {
       // Fetching additional pages recursively
       await fetchAdditionalPages(nextPageUrl);
     }
    }
    } catch (error) {
      throw error;
    }
}

// Function to add scraped data to the final array
// function addDataToFinalArray(names, prices) {
  function addDataToFinalArray(dairy) {
  for (let i = 0; i < dairy.length; i++) {
    scrapedData.push({
      dairy: dairy[i],
      // price: prices[i]
    });
  }
  // console.log(names.length)
}

// Function to extract the URL of the next page
function getNextPageUrl($) {
  const nextPageLink = $('.pagination')
    .find('.next_page')
    .attr('href');

  if (nextPageLink) {
    return `${baseUrl}${nextPageLink}`;
  }

  return null;
}

// Start scraping by fetching the initial page
await fetchAdditionalPages(initialUrl);

return scrapedData;
console.log('from the first scrap: ', scrapedData)
}

