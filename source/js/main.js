'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var navToggle = header.querySelector('.page-header__toggle');
  var reservationForm = document.querySelector('.reservation__form');
  var inputName = reservationForm.querySelector('#name');
  var inputPhone = reservationForm.querySelector('#phone');
  var inputEmail = reservationForm.querySelector('#email');
  var isFocusField = false;
  var validationError = false;

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

  var validateName = function () {
    if (inputName.value.split('').length < 0) {
      inputName.setCustomValidity('Введите ваше имя');
      return false;
    } else {
      inputName.setCustomValidity('');
      return true;
    }
  }

  var checkall = function () {
    if (validateName() return true;
    else return false;
  }

  checkall();
  // var validationInputName = function () {
  //   if (inputName.value.split('').length < 0) {
  //       validationError = true;
  //       inputName.setCustomValidity('Введите ваше имя');
  //     }
  //   }

  //   var onFocusField = function () {
  //     isFocusField = true;
  //   }

  //   var onBlurField = function () {
  //     isFocusField = false;
  //   }

  //   var onHashtagsFieldValid = function () {
  //     validationError = false;
  //     inputName.style.outline = '';
  //     inputName.setCustomValidity('');
  //   }

  // inputName.addEventListener('change', onHashtagsFieldValid);
  // inputName.addEventListener('focus', onFocusField);
  // inputName.addEventListener('blur', onBlurField);

  //   reservationForm.addEventListener('submit', function (evt) {
  //     validationInputName();
  //       if (!validationError) {
  //       var formData = new FormData(reservationForm);
  //       formData.send(onSuccess, onError);
  //     }
  //   });
})();
