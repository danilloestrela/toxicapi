import { Router } from 'express';
import sampleRouter from './sample.routes';

const routes = Router();

routes.use('/sample', sampleRouter);

export default routes;
