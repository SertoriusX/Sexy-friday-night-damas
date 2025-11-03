// function.test.js
const displayContainer = require('./index.js');

// Mock del DOM
document.body.innerHTML = `
  <div id="colorBox"></div>
`;

test('comprobacionDelDisplayContainer', () => {
  const result = displayContainer("first_image");
  const colorBox = document.querySelector("#colorBox");
  expect(colorBox.style.backgroundImage).toBe('url("./imagenes/first_image.png")');
});