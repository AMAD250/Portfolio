document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
        themeSelect.addEventListener('change', handleThemeChange);
    }

    const colorButton = document.getElementById('color-button');
    if (colorButton) {
        colorButton.addEventListener('click', changeColorScheme);
    }

    const notifyButton = document.getElementById('notifyButton');
    if (notifyButton) {
        notifyButton.addEventListener('click', () => showNotification("Notification button clicked!"));
    }
});

function handleThemeChange(event) {
    let themeName = '';
    switch (event.target.value) {
        case 'dark':
            document.body.className = 'dark-theme';
            themeName = 'Dark';
            break;
        case 'light':
            document.body.className = 'light-theme';
            themeName = 'Light';
            break;
        default:
            document.body.className = '';
            themeName = 'Default';
    }
    showNotification(`Theme changed to ${themeName}.`);
}

function changeColorScheme() {
    if (document.body.style.backgroundColor === 'white') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}

function showNotification(message) {
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") {
        new Notification(message);
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(message);
            }
        });
    }
}

function validateForm() {
    const form = document.getElementById('myForm');
    
    const name = form['name'].value;
    if (!name.match(/^[A-Za-z\s]+$/)) {
        alert('Name must contain letters and spaces only.');
        return false;
    }
    
    const email = form['email'].value;
    if (!email.match(/^\S+@\S+\.\S+$/)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    const age = form['age'].value;
    if (age < 18 || age > 100) {
        alert('Age must be between 18 and 100.');
        return false;
    }
    
    const feedback = form['feedback'].value;
    if (!feedback) {
        alert('Feedback cannot be empty.');
        return false;
    }
    
    const topic = form['topic'].value;
    if (!topic) {
        alert('Please select a topic of interest.');
        return false;
    }
    
    return true;
}
