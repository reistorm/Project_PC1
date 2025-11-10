// const contents = document.querySelectorAll('.program-line__content');

// contents.forEach((elem) => {
//     const title = elem.querySelector('.program-line__title');
//     const descr = elem.querySelector('.program-line__descr');

//     title.addEventListener('click', () => {
//         descr.classList.toggle('active');
//     })

// });

const contents = document.querySelectorAll('.program-line__content');

contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title');
    const descr = elem.querySelector('.program-line__descr');

    title.addEventListener('click', () => {
        // Перед тем как открыть текущий descr, закрываем все остальные
        contents.forEach((otherElem) => {
            const otherDescr = otherElem.querySelector('.program-line__descr');
            if (otherDescr !== descr) {
                otherDescr.classList.remove('active');
            }
        });
        // Переключаем текущий descr
        descr.classList.toggle('active');
    });
});

