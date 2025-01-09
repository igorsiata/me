const themeButton = document.getElementById("btn-theme");
const body = document.body;
const theme = localStorage.getItem('theme');


if (theme) {
    body.classList.add(theme);
    if (theme === 'dark') {
        themeButton.querySelector("#dark-mode-icon").style.display = 'none';
        themeButton.querySelector("#light-mode-icon").style.display = 'block';
        body.classList.replace('dark', 'dark');
    } else {
        themeButton.querySelector("#dark-mode-icon").style.display = 'block';
        themeButton.querySelector("#light-mode-icon").style.display = 'none';
        body.classList.replace('light', 'light');
    };
}


themeButton.onclick = () => {
    console.log(theme)
    if (body.classList.contains('dark')) {
        themeButton.querySelector("#dark-mode-icon").style.display = 'block';
        themeButton.querySelector("#light-mode-icon").style.display = 'none';
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        themeButton.querySelector("#dark-mode-icon").style.display = 'none';
        themeButton.querySelector("#light-mode-icon").style.display = 'block';
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
    };
}



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));