// abcd1234 : $2b$12$QHTWoMQ9tvObSu6RsJn4LuMLJcLgSP5fo4D.0n2LW4ijSozieJoGO
let users = [
  {
    id: '1',
    username: 'bob',
    password: '$2b$12$a3fxWe9ZpL0t0gECgG.tTeVAOthW7m4qs1MKm4JKKQC3Mj936ONhO',
    name: 'Bob',
    email: 'bob@gmail.com',
    url: 'http://image.com'
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.name === username);
}

export async function findById(id) {
  return users.find(user => user.id === id);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}