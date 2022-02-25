const clients = [
  {
    name: 'João',
    email: 'joao@test.com'
  },
  {
    name: 'Gustavo',
    email: 'gustavo@test.com'
  },
  {
    name: 'Vinícius',
    email: 'vinicius@test.com'
  }
]

const list = document.getElementById('clients');

//Criando uma função
const createParagraph = (textContent, parent) => {
  const paragraph = document.createElement('p');
  const text = document.createTextNode(textContent);
  paragraph.appendChild(text);
  parent.appendChild(paragraph);
}

clients.forEach((client) => {
  const listItem = document.createElement('li');

  createParagraph(client.name, listItem);

  createParagraph(client.email, listItem);

  list.appendChild(listItem);
});
