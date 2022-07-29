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

const validition = new JustValidate(".form", {
  errorFieldStyle: {
    border: '1px solid #FF5C00',
  },
  errorLabelStyle: {
    color: '#FF5C00',
  },
  focusInvalidField: false,
});

validition
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Вы не ввели имя",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Вы ввели слишком короткое имя",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Вы ввели слишком длинное имя",
    },
  ])
  .addField("#phone", [
    {
      rule: "required",
      errorMessage: "Вы не ввели телефон",
    },
    {
      validator: (name, value) => {
        const phone = inputTel.inputmask.unmaskedvalue();
        return Boolean(+phone && phone.length === 10);
      },
      errorMessage: "Вы ввели некорректный номер телефона",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Вы не ввели e-mail",
    },
    {
      rule: "email",
      errorMessage: "Вы ввели некорректный e-mail",
    },
  ]);

