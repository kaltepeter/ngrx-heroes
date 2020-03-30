export interface User {
  id: number;
  name: string;
  description: string;
}

// for testing

export const generateUser = (idOverride?: number): User => ({
  id: idOverride || (Math.floor(Math.random() * 100) + 1),
  name: 'Test name',
  description: 'Test description'
});

export const generateUserArray = (count = 10): User[] =>
  // Overwrite random id generation to prevent duplicate IDs:
  Array.apply(null, Array(count)).map((value, index) => generateUser(index + 1));

export const generateUserMap = (
  userArray: Array<User> = generateUserArray()
): { ids: Array<number>, entities: any } => ({
  entities: userArray.reduce(
    (userMap, user) => ({ ...userMap, [user.id]: user }),
    {}
  ),
  ids: userArray.map(user => user.id)
});

