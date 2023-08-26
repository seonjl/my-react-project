import { faker } from '@faker-js/faker';

export function createRandomPost(user: any): any {
    return {
      _id: faker.database.mongodbObjectId(),
      topic: faker.word.sample(),
      author: user,
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(),
      createdAt: faker.date.past(),
    };
  }
