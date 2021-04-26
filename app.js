import get from './getElement.js';
import getUser from './fetchUser.js';

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btn = get('.btn');
const btns = [...document.querySelectorAll('.icon')];

const showUser = () => {
  //get user from api
  getUser().then((data) => console.log(data));

  //display user
};

window.addEventListener('DOMContentLoaded', showUser);
window.addEventListener('click', showUser);
