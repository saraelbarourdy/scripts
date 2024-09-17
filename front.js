let body = document.body;//Inside body.innerHTML put any HTML content you want and it will be the content of the vulnerable page contain the XSS vulnerability.
body.innerHTML = `
<h1>Put Whatever you want!</h1>
`
