export default class Popup {
	constructor(element) {
		this.element = element.querySelector('.popup');//ловим блок
    }
    open(event) {//открытие блоков добавления.
        if (event.target.classList.contains('user-info__button')) {
            //this.element.querySelector('.popup').classList.add('popup_is-opened');
            this.element.classList.add('popup_is-opened');
            return;
        }
        if (event.target.classList.contains('user-info__button-edit')) {
            this.element.querySelector('.popup-edit').classList.add('popup_is-opened');
            this.element.querySelector('.popup-edit__button').classList.add('button-active');
            return;
        }
        if (event.target.classList.contains('place-card__image')) {
            this.element.querySelector('.popup-image').classList.add('popup_is-opened');
            this.element.querySelector('.popup-image__content').setAttribute('style', `${event.target.getAttribute('style')}`);
            return;
        }
        if (event.target.classList.contains('user-info__photo')) {
            this.element.querySelector('.popup-avatar').classList.add('popup_is-opened');
            return;
        }
    }
    close(event) {//закрытие блоков
        if (event.target.classList.contains('popup__close')) {//закрытие формы добавления карточки
            this.element.classList.remove('popup_is-opened');
            this.element.querySelector('form').reset();//сбросим форму, на случай, если введут данные, но просто закроют форму
            this.element.querySelector(`.error`).textContent = '';
            console.log(this.element);
            return;
        } if (event.target.classList.contains('popup-edit__close')) {//закрываем блок редактирвоания профиля
            this.element.querySelector('.popup-edit').classList.remove('popup_is-opened');
            this.element.querySelector('form').reset();//сбросим форму, на случай, если введут данные, но просто закроют форму
            this.element.querySelector(`.error`).textContent = '';
            console.log(this.element);
            return;
        } if (event.target.classList.contains('popup-image__close')) {//закроем блок с картинкой на весь экран
            this.element.querySelector('.popup-image').classList.remove('popup_is-opened');
            this.element.querySelector(`.error`).textContent = '';
            console.log(this.element);
            return;
        }
        if (event.target.classList.contains('popup-avatar__close')) {//закроем блок с картинкой на весь экран
            this.element.querySelector('.popup-avatar').classList.remove('popup_is-opened');
            this.element.querySelector('.popup-avatar__form').reset();//сбросим форму, на случай, если введут данные, но просто закроют форму
            this.element.querySelector(`.error`).textContent = '';
            console.log(this.element);
            return;
        } if (event.type === 'submit') {//закрываем форму добавления карточки при submit
            this.element.querySelector('.popup').classList.remove('popup_is-opened');
            this.element.querySelector('.popup__button').classList.remove('button-active');
            this.element.querySelector('form').reset();//
			return;
        }
    }
}
