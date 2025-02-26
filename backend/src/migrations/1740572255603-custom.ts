import { MigrationInterface, QueryRunner } from 'typeorm';

export class Custom1740572255603 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO muscle_group (name, description) VALUES
            ('Грудные', 'Мышцы груди, участвующие в жиме и отжиманиях'),
            ('Спина', 'Мышцы спины, используемые в подтягиваниях и тягах'),
            ('Ноги', 'Основные мышцы ног, включая квадрицепсы и бицепсы бедра'),
            ('Плечи', 'Дельтовидные мышцы, отвечающие за подъем рук'),
            ('Руки', 'Бицепс и трицепс, отвечающие за сгибание и разгибание рук');
          `);

    await queryRunner.query(`
            INSERT INTO exercise (name, description) VALUES
            ('Жим лежа', 'Упражнение для тренировки грудных мышц'),
            ('Подтягивания', 'Упражнение для тренировки мышц спины'),
            ('Приседания', 'Базовое упражнение для ног'),
            ('Жим гантелей вверх', 'Упражнение для плеч'),
            ('Сгибание рук со штангой', 'Упражнение для бицепсов');
          `);

    await queryRunner.query(`
            INSERT INTO exercise_muscle_groups_muscle_group  (exerciseId, muscleGroupId) VALUES
            ((SELECT id FROM exercise WHERE name = 'Жим лежа'), (SELECT id FROM muscle_group WHERE name = 'Грудные')),
            ((SELECT id FROM exercise WHERE name = 'Подтягивания'), (SELECT id FROM muscle_group WHERE name = 'Спина')),
            ((SELECT id FROM exercise WHERE name = 'Приседания'), (SELECT id FROM muscle_group WHERE name = 'Ноги')),
            ((SELECT id FROM exercise WHERE name = 'Жим гантелей вверх'), (SELECT id FROM muscle_group WHERE name = 'Плечи')),
            ((SELECT id FROM exercise WHERE name = 'Сгибание рук со штангой'), (SELECT id FROM muscle_group WHERE name = 'Руки'));
          `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM exercise_muscle_groups_muscle_group`);
    await queryRunner.query(`DELETE FROM exercise`);
    await queryRunner.query(`DELETE FROM muscle_group`);
  }
}
