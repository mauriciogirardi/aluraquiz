import { NextApiResponse, NextApiRequest } from 'next/types';

import db from '../../../db.json';

export default (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  response.setHeader('Access-Control-Allow-Credentials', 200);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  );

  response.json(db);
};
