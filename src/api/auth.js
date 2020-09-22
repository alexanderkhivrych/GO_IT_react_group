const login = ({ email, password }) =>
  fetch('http://localhost:3000/login', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }).then((r) => r.json());

const register = ({ email, password, age, firstname, lastname }) =>
  fetch('http://localhost:3000/register', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email, password, age, firstname, lastname }),
  }).then((r) => r.json());

export default { login, register };
