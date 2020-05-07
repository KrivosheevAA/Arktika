'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var navToggle = header.querySelector('.page-header__toggle');
  var form = document.querySelector('.reservation__form');
  var userNameInput = form.querySelector('#name');
  var phoneInput = form.querySelector('#phone');
  var emailInput = form.querySelector('#email');
  var rememberInput = form.querySelector('#remember');
  var MIN_NAME_LENGTH = 2;

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

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

phoneInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

form.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < MIN_NAME_LENGTH) {
    target.setCustomValidity(
      'Имя должно состоять минимум из ' +
      MIN_NAME_LENGTH +
      '-х символов'
    );
  } else {
    target.setCustomValidity('');
  }
});



  // $('.reservation__form').validate({
  //   rules: {
  //     name: 'required',
  //     phone: 'required',
  //     email: {
  //       required: true,
  //       email: true
  //     },
  //     remember: 'required'
  //   },
  //   messages: {
  //     firstname: 'Введите Имя',
  //     phone: 'Введите телефон',
  //     email: 'Введите email',
  //     remember: 'Примите согласие'
  //   },

  //   submitHandler: function (form) {
  //     form.submit();
  //   }
  // });

})();
