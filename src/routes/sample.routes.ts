import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Sample from '../models/Sample';
import SampleRepository from '../repositories/SampleRepository';

const sampleRouter = Router();

sampleRouter.post('/', async (require, response) => {
  try {
    const repo = getRepository(Sample);
    const saveData = {
      sampleCode: require.body.codigo_amostra,
    };
    const res = await repo.save(saveData);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});

sampleRouter.get('/', async (require, response) => {
  response.json(await getRepository(Sample).find());
});

sampleRouter.get('/:sampleCode', async (require, response) => {
  const repository = getCustomRepository(SampleRepository);
  const res = await repository.findByName(request.params.sampleCode);
  response.json(res);
});
export default sampleRouter;
