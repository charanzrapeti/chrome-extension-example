const h1Element = document.querySelector('h1');
if (h1Element && location.hostname === 'www.example.com') {
  h1Element.textContent = 'fake example';
}
