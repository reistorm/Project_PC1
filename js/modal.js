
const modal = () => {
    const modalWindow = document.querySelector('.modal');
    const buttonModals = document.querySelectorAll('.modal__button');
    const body = document.querySelector('body');
    const modalClose = document.querySelector('.modal__close');

    modalWindow.addEventListener('click', (event) => {
        const modalContent = event.target.closest('.modal__inner');
        console.log(modalContent);
        if (!modalContent) {
            modalWindow.style.display = '';
        }
    })

    buttonModals.forEach((item => {
        item.addEventListener('click', () => {
            modalWindow.style.display = 'flex';
            body.classList.add('noscroll');
        });
    }));

    modalWindow.addEventListener('click', (e) => {
        const isModal = e.target.closest('.modal__inner');
        if (!isModal) {
            modalWindow.style.display = 'none';
            body.classList.remove('noscroll');
        };
    });


    modalClose.addEventListener('click', () => {
        modalWindow.style.display = 'none';
        body.classList.remove('noscroll');
    });

    function getScrollbarWidth() {
        const div = document.createElement('div');
        div.style.visibility = 'hidden';
        div.style.overflow = 'scroll';
        div.style.position = 'absolute';
        div.style.width = '50px';
        div.style.height = '50px';

        document.body.appendChild(div);
        const scrollbarWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);

        return scrollbarWidth;
    }


    // Функция блокировки прокрутки с устранением скачка
    function lockScroll() {
        const scrollbarWidth = getScrollbarWidth();
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = scrollbarWidth + 'px';
    }

    // Функция разблокировки прокрутки
    function unlockScroll() {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }

    // Открытие модального окна
    buttonModals.forEach((item) => {
        item.addEventListener('click', () => {
            modalWindow.style.display = 'flex';
            lockScroll();
        });
    });

    // Закрытие при клике вне inner блока
    modalWindow.addEventListener('click', (e) => {
        const isModal = e.target.closest('.modal__inner');
        if (!isModal) {
            modalWindow.style.display = 'none';
            unlockScroll();
        }
    });

    // Закрытие по кнопке
    modalClose.addEventListener('click', () => {
        modalWindow.style.display = 'none';
        unlockScroll();
    });
}

modal();