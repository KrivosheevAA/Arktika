'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var navToggle = header.querySelector('.page-header__toggle');
  var nameInput = document.querySelector('#name');
  var phoneInput = document.querySelector('#phone');
  var emailInput = document.querySelector('#email');
  var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  document.body.classList.remove('site-body--nojs');

  navToggle.addEventListener('click', function () {
    header.classList.toggle('page-header--opened');
  });

  var initPictureElement = function () {
    document.createElement('picture');
  };


  $('head').append('<meta http-equiv="x-ua-compatible" content="ie=edge">');

  $('body').append('<script>svg4everybody();</script>');

  initPictureElement();

  $('#phone').mask('+7(999)9999999');


  emailInput.addEventListener('invalid', function () {
    if (!EMAIL_REGEXP.test(emailInput.value)) {
      emailInput.setCustomValidity('Введите правильно email');
    } else {
      emailInput.setCustomValidity('');
    }
  });

  phoneInput.addEventListener('invalid', function (evt) {
    if (evt.target.value.length === 0) {
      phoneInput.setCustomValidity('Введите правильно номер');
    } else {
      phoneInput.setCustomValidity('');
    }
  });

  nameInput.addEventListener('invalid', function (evt) {
    if (evt.target.value.length === 0) {
      nameInput.setCustomValidity('Введите имя');
    } else {
      nameInput.setCustomValidity('');
    }
  });
})();
