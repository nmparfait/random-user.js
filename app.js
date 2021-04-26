import get from './getElement.js';
import getUser from './fetchUser.js';
import displayUser from './displayUser.js';

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btn = get('.btn');
const btns = [...document.querySelectorAll('.icon')];

const showUser = async () => {
  //get user from api

  //getUser().then((data) => console.log(data));
  const person = await getUser();
  displayUser(person);
  //display user
};

window.addEventListener('DOMContentLoaded', showUser);
window.addEventListener('click', showUser);
