let users = [
  {
    id: '1',
    username: 'bob',
    password: '',
    name: 'Bob',
    email: 'bob@gmail.com',
    url: 'http://image.com'
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.name === username);
}