'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var navToggle = header.querySelector('.page-header__toggle');

  document.body.classList.remove('site-body--nojs');

  navToggle.addEventListener('click', function () {
    header.classList.toggle('page-header--opened');
  });

  var initPictureElement = function () {
    document.createElement('picture');
  };

  var initUseElement = function () {
    svg4everybody();
  };

  initPictureElement();
  initUseElement();

  $('.reservation__form').validate({
    rules: {
      name: 'required',
      phone: 'required',
      email: {
        required: true,
        email: true
      },
      remember: 'required'
    },
    messages: {
      firstname: 'Введите Имя',
      phone: 'Введите телефон',
      email: 'Введите email',
      remember: 'Примите согласие'
    },

    submitHandler: function (form) {
      form.submit();
    }
  });

  $('#phone').mask('+7(999)9999999');
})();
