const darkModeToggle = () => {
    const darkModeButton = document.getElementById('theme-toggle');
    const body = document.body;

    //Recover theme from local storage
    const savedTheme = localStorage.getItem('theme'); 
    //body.style.transition = 'none';

    darkModeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        //Verify if dark mode is active
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        //update icon
        document.querySelector('.sun').classList.toggle('hidden');
        document.querySelector('.moon').classList.toggle('hidden');
    });
};

export { darkModeToggle };