// api/src/functions/routes.js
import { graphql } from '@redwoodjs/api';
import { Router } from 'itty-router';
import app from '../services/scraping';

// import { handler } from './graphql2';
// import { handler } from './scraping';

import { handler as graphqlHandler } from './graphql2';
import { handler as scrapingHandler } from './scraping';

const router = Router();

// ...existing routes...

// Route for scraping data - initially suggested by Redwood
// router.get('/scraped-data', handler);

// Route for GraphQL API
// router.all('/graphql', graphqlHandler);

// Route for scraping data
router.all('/scraped-data', app.handle);

export const handle = router.handle;
