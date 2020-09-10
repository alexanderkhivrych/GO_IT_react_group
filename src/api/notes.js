const getNotes = () => fetch('https://jsonplaceholder.typicode.com/todos').then((r) => r.json());

export default { getNotes };
