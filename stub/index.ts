import { faker } from "@faker-js/faker"
import { createRandomPost } from "./posts"
import { createRandomUser } from "./users"

export const Users: any[] = faker.helpers.multiple(createRandomUser, {
    count: 10,
})

// create 10 posts each user
export const Posts: any[] = Users.map((user) => {
    return faker.helpers.multiple(() => createRandomPost(user), {
        count: 10,
    });
}).flat().sort(() => Math.random() - 0.5)

const getRandomUser = () => Users[faker.number.int({ min: 0, max: 9})]

export const PostComments: any[] = Posts.map((post) => {
    return createRandomPostComment(post._id)
})

export function createRandomPostComment(postId: string): any {
    return {
      _id: faker.database.mongodbObjectId(),
      post: postId,
      comments: faker.helpers.multiple(() => createRandomComment(getRandomUser()), {
        count: 10,
      }),
    };
  }

export function createRandomComment(user: any): any {
    return {
      _id: faker.database.mongodbObjectId(),
      content: faker.lorem.paragraph(),
      author: user,
      createdAt: faker.date.past(),
    };
  }
  