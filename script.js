'use strict';

const selectEl = document.querySelector('#select');

const choices = new Choices(selectEl, {
  removeItems: false,
  searchEnabled: false,
  position: 'bottom',
  shouldSort: false,
  itemSelectText: '',
  classNames: {
    containerOuter: 'choices item',
  },
});

ymaps.ready(init);
function init() {
  const yandexMap = new ymaps.Map("yandexMap", {
    center: [48.872185073737896, 2.354223999999991],
    zoom: 11,
  });

  const mapPoint = new ymaps.Placemark(
    [48.872185073737896, 2.354223999999991],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/mapPoint.svg",
      iconImageSize: [28, 40],
    }
  );

  yandexMap.geoObjects.add(mapPoint);
}

new SimpleBar(document.querySelector(".skrollbar"), {
  autoHide: false,
  scrollbarMaxSize: 74,
});

const inputTel = document.querySelector('.form__input[type="tel"]');

const telMask = new Inputmask("+7 (999)-999-99-99");
telMask.mask(inputTel);

new window.JustValidate(".form", {
  colorWrong: "#FF5C00",
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 25,
    },
    phone: {
      required: true,
      function: (name, value) => {
        const phone = inputTel.inputmask.unmaskedvalue();
        return +phone && phone.length === 10;
      },
    },
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    name: {
      required: "Вы не ввели имя",
      minLength: "Имя слишком короткое",
      maxLength: "Имя слишком длинное",
    },
    phone: {
      required: "Вы не ввели номер телефон",
      function: "Вы ввели некорректный номер телефона",
    },
    email: {
      required: "Вы не ввели e-mail",
      email: "Вы ввели некорректный e-mail",
    },
  },
});
