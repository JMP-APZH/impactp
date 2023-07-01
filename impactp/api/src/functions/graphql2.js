import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

// import { db } from 'src/lib/db'
// import { logger } from 'src/lib/logger'

// export const handler = createGraphQLHandler({
//   loggerConfig: { logger, options: {} },
//   directives,
//   sdls,
//   services,
//   onException: () => {
//     // Disconnect from your database with an unhandled exception.
//     db.$disconnect()
//   },
// })

// api/src/functions/graphql.js
import { makeMergedSchema } from '@redwoodjs/graphql-server';
import { scrapeData } from './scraping';

export const handler = async (event, context) => {
  const mergedSchema = makeMergedSchema({ schemas });
  const result = await graphqlHandler(event, context, mergedSchema);

  if (event.path === '/scraped-data') {
    try {
      const scrapedData = await scrapeData();
      return {
        statusCode: 200,
        body: JSON.stringify(scrapedData),
      };
    } catch (error) {
      console.log('An error occurred:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'An error occurred while scraping the data.' }),
      };
    }
  }

  return result;
};

