import { buildResponse } from '../utils/response.js';

export function notFoundMiddleware(req, res) {
  res.status(404).json(
    buildResponse(false, 'Endpoint not found', { path: req.path })
  );
}
