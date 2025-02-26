import { DataSource } from 'typeorm';
import { CONNECTION } from './connection';

const AppDataSource = new DataSource({
  ...CONNECTION,
  entities: ['*/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
});

void AppDataSource.initialize();

export default AppDataSource;
