import { NextApiResponse, NextApiRequest } from 'next/types';

import db from '../../../db.json';

export default (request: NextApiRequest, response: NextApiResponse) => {
  response.json(db);
};
