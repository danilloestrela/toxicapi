import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('samples')
class Sample {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 8,
    unique: true,
    name: 'sample_code',
  })
  sampleCode: string;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default Sample;
