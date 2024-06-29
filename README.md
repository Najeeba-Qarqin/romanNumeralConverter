# Roman Numeral Converter 🚀

## Project Description 📝

> Roman numeral converter project created in HTML, CSS and javaScript it can convert the number enterd in input box to roman numeral.

Examples:

- It can convert the desimal number to roman number.
- From this project i learned how to use javaScript in projects and some events of javaScript.
- The style and accessibility of this project make's it stand out.

### HTML:
```html

  <header>
    <h1>Roman Numeral Converter</h1>
  </header>
  <div class="container">
    <label for="number">Enter a Number:</label>
    <input type="number" id="number">
    <button id="convert-btn">CONVERT</button>
  </div>
  <div id="output"></div>
  <script src="script.js"></script>

```
### CSS:
```css

header {
  font-size: 10px;
  text-align: center;
  margin: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 10px;
  width: 80vw;
  box-shadow: 0 0 30px white;
  border-radius: 20px;
}

```
### JS:
```javascript


button.addEventListener('click', () => {
  if (number.value === '') {
    result.innerHTML = 'Please enter a valid number';
    number.value = '';
    return false;
  }
  if (number.value < 0) {
    result.innerHTML = 'Please enter a number greater than or equal to 1';
    number.value = '';
    return false;
  }
  if (number.value > 3999) {
    result.innerHTML = 'Please enter a number less than or equal to 3999';
    number.value = '';
    return false;
  }
});

```

## Demo 📸

![Demo](/images/demo.png)

## Technologies Used 🛠️

- HTML
- CSS
- JavaScript

## Features ⭐

- Building Roman numeral converter.

## Author 👩‍💻


- LinkedIn: [najeeba-qarqin](https://www.linkedin.com/in/najeeba-qarqin-5419502ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
- Email: [najeebaqarqin](najeebaqarqin@gmail.com)
- GitHub: [Najeeba_Qarqin](https://github.com/Najeeba-Qarqin)
