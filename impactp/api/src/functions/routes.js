// api/src/functions/routes.js
import { graphql } from '@redwoodjs/api';
import { Router } from 'itty-router';

import { handler } from './graphql2';

const router = Router();

// ...existing routes...

// Route for scraping data
router.get('/scraped-data', handler);

export const handle = router.handle;
