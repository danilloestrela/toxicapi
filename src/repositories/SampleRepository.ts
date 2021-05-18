import { EntityRepository, Repository } from 'typeorm';
import Sample from '../models/Sample';

@EntityRepository(Sample)
export default class SampleRepository extends Repository<Sample> {
  public async findByName(name: string): Promise<Sample[]> {
    return this.find({
      where: { name },
    });
  }
}
