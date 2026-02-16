function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const introView = document.getElementById('intro-view');
    const homeView = document.getElementById('home-view');

    envelope.classList.add('open');


    setTimeout(() => {
        introView.style.opacity = '0';
        introView.style.transform = 'scale(0.95)';

        setTimeout(() => {
            introView.classList.remove('active');
            introView.style.display = 'none';

            homeView.style.display = 'block';
            requestAnimationFrame(() => {
                homeView.classList.add('active');
                homeView.style.opacity = '1';
                homeView.style.transform = 'translateY(0)';
            });

        }, 600);
    }, 1500);
}

window.switchView = function (viewId) {
    const currentView = document.querySelector('.view.active');
    const nextView = document.getElementById(viewId);

    if (currentView && currentView.id !== 'intro-view') {
        currentView.style.opacity = '0';
        currentView.style.transform = 'translateY(-20px)';

        setTimeout(() => {
            currentView.classList.remove('active');
            currentView.style.display = 'none';

            showNextView(nextView);
        }, 500);
    } else {
        showNextView(nextView);
    }
}

function showNextView(viewElement) {
    viewElement.style.display = 'block';

    void viewElement.offsetWidth;

    viewElement.classList.add('active');
    viewElement.style.opacity = '1';
    viewElement.style.transform = 'translateY(0)';

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
    });
});

function flipPage(element) {
    if (element.classList.contains('flipped')) {
        element.classList.remove('flipped');
    } else {
        element.classList.add('flipped');
    }
}
