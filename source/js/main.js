'use strict';

var header = document.querySelector('.page-header');
var navToggle = header.querySelector('.main-nav__toggle');

document.body.classList.remove('site-body--nojs');

navToggle.addEventListener('click', function () {
  header.classList.toggle('page-header--opened');
});