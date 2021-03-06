import { wordsError } from '../index.js';
export default class FormValidator {
    constructor(popup) {
        this.form = popup;
        this.button = this.form.querySelector('.button');
    }
    setValidate() {
        this.form.addEventListener('input', this.setSubmitButtonState.bind(this, this.form, this.button));
        this.form.addEventListener('input', this.checkInputValidity.bind(event));
    }

    checkInputValidity(event) {//проверка валидации
        if (event.target.validity.tooShort) {
            return event.target.closest('div').querySelector(`.error`).textContent = 'Должно быть от 2 до 30 символов';
        } if (event.target.validity.valueMissing) {
            return event.target.closest('div').querySelector(`.error`).textContent = 'Это обязательное поле';
        } if (event.target.validity.patternMismatch) {
            return event.target.closest('div').querySelector(`.error`).textContent = 'Тут должна быть ссылка на картинку';
        } else
            return event.target.closest('div').querySelector(`.error`).textContent = '';
    }

    setSubmitButtonState(form, button) {//фунция для блокировки кнопки отправки
        if (!form.checkValidity()) {//если наш блок не прошел проверку
            button.setAttribute('disabled', true);
            button.classList.remove('button-active');
            return;//иначе кнопка не будет менять свое состояние
        } else {
            button.removeAttribute('disabled', false);
            button.classList.add('button-active');
            return;//иначе кнопка не будет менять свое состояние
        }
    }
};