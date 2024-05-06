const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        const target = e.target.getAttribute('href');
        tabContents.forEach((content) => {
            content.style.display = 'none';
        });
        document.querySelector(target).style.display = 'block';
    });
});