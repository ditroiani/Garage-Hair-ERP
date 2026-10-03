async function loadComponent(selector, path) {
    const element = document.querySelector(selector);

    if (!element) return;

    const response = await fetch(path);
    const html = await response.text();

    element.innerHTML = html;
}

loadComponent("#navbar", "../components/navbar.html");
loadComponent("#footer", "../components/footer.html");