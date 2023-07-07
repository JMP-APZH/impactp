import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import { schema } from '../graphql/dairies.sdl.js';
import { dairy } from '../graphql/dairies.js';

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const handler = createGraphQLHandler({
  schema: schema,
  context: {
    prisma,
  },
  loggerConfig: { logger, options: {} },
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})

