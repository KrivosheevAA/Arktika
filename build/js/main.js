'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var navToggle = header.querySelector('.page-header__toggle');

  document.body.classList.remove('site-body--nojs');

  navToggle.addEventListener('click', function () {
    header.classList.toggle('page-header--opened');
  });

  var initPictureElement = function () {
    document.createElement( "picture" );
  }

  var initUseElement = function () {
    svg4everybody();
  }

  initPictureElement();
  initUseElement();

})();
