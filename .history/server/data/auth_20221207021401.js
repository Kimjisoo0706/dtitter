// abcd1234: $2b$12$kXPHhHCo9Y.j.s0fsRmpZ.RIAp4EIebxjPqd92hPGyOyuyUKTGLam
let users = [
  {
    id: '1',
    username: 'jun',
    password: '$2b$12$kXPHhHCo9Y.j.s0fsRmpZ.RIAp4EIebxjPqd92hPGyOyuyUKTGLam',
    name: 'jun',
    email: 'ks@gmail.com',
    url: 'http://image.com',
  },
  {
    id: '1',
    username: 'V',
    password: '$2b$12$kXPHhHCo9Y.j.s0fsRmpZ.RIAp4EIebxjPqd92hPGyOyuyUKTGLam',
    name: 'V',
    email: 'ks@gmail.com',
    url: 'http://image.com',
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