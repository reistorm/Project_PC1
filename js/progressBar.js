const progressBar = () => {
    let animationStarted = false;

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function checkPosition() {
        if (animationStarted) return;

        const element = document.querySelector('.course__progress');
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const thirdHeight = viewportHeight / 3;
        const elementCenterY = rect.top + rect.height / 2;

        if (
            elementCenterY >= thirdHeight &&
            elementCenterY <= 2 * thirdHeight
        ) {
            animationStarted = true;
            startAnimation();
        }
    }

    function startAnimation() {
        const minNumber = 350000;
        const maxNumber = 600000;
        const maxTotal = 1000000;
        const duration = 2000;

        const targetValue = getRandomNumber(minNumber, maxNumber);

        const progressElem = document.querySelector('progress');
        const numberElem = document.querySelector('.course__price');

        const startTime = performance.now();

        function animate() {
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            const progressRatio = Math.min(elapsed / duration, 1);
            const currentValue = Math.round(progressRatio * targetValue);

            progressElem.value = currentValue;
            numberElem.textContent = `${currentValue.toLocaleString()}₽`;

            if (progressRatio < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    checkPosition();
}

progressBar();