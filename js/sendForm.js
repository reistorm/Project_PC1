const sendForm = () => {
    const form = document.querySelector('.modal');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        const text = form.querySelector('input[type=text');
        const tel = form.querySelector('input[type=tel');
        const email = form.querySelector('input[type=email');

        // const sendObj = {
        //     name: text.value,
        //     phone: tel.value,
        //     email: email.value
        // }

        const sendObj = {};
        formData.forEach((value, key) => {
            sendObj[key] = value;
        })

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendObj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка при отправке данных');
                }
                return response.json();
            })
            .then((json) => {
                console.log(json);
                alert('Данные успешно отправлены!');
                // Очистка формы после отправки
                form.reset();
            })
            .catch((error) => {
                alert('Ошибка: ' + error.message);
            });
    })
}

sendForm();