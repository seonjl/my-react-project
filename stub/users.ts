import { faker } from '@faker-js/faker';

export function createRandomUser(): any {
    return {
      _id: faker.database.mongodbObjectId(),
      name: faker.internet.displayName(),
      company: faker.person.jobType(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }
  