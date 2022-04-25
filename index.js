/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
// Create a function to add a new book to the collection, with title and author.

import {
  DateTime,
} from './date.js';

import {
  Methods, booksSection, addBook,
} from './modules/methods.js';
import {
  contactSec, fieldAddSec, displayBookSec, vieContact, viewAddBook, viewBooks,
} from './modules/singlePage.js';

booksSection.addEventListener('click', (e) => {
  Methods.argument(e);
});

window.addEventListener('DOMContentLoaded', Methods.addLS);
addBook.addEventListener('click', (e) => {
  Methods.check(e);
});

// add event listners
viewBooks.addEventListener('click', () => {
  viewBooks.style.display = 'block';
  displayBookSec.style.display = 'flex';
  fieldAddSec.style.display = 'none';
  contactSec.style.display = 'none';
});

viewAddBook.addEventListener('click', () => {
  fieldAddSec.style.display = 'flex';
  displayBookSec.style.display = 'none';
  contactSec.style.display = 'none';
});

vieContact.addEventListener('click', () => {
  contactSec.style.display = 'flex';
  fieldAddSec.style.display = 'none';
  displayBookSec.style.display = 'none';
});

function time() {
  const siteDate = document.querySelector('#date');
  siteDate.textContent = DateTime.now().toLocaleString({
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

setInterval(time, 1000);