# 🎼 Чит лист

Документ, описывающий основные конструкции, выражения, методы и библиотеки, используемые в прохождении курса.

---

## 📚 Оглавление

- [Basics #1](#basics-1)
  * [Переменные](#Переменные)
  * [Типы данных](#Типы-данных)
  * [Операторы](#Операторы)
  * [Условия](#Условия)
  * [Циклы](#Циклы)
  * [Запуск программ Node](#Запуск-программ-node)
  * [Передача параметров Node](#Передача-параметров-node)
- [Basics #2](#basics-2)
  * [Функции](#Функции)
  * [Замыкания](#Замыкания)
  * [Методы массивов](#Методы-массивов)
  * [JSON](#json)
- [Classes #1](#classes-1)
  * [fs, path](#fs-path)
  * [Методы объектов](#Методы-объектов)
  * [Контекст, this](#Контекст-this)
  * [toString, valueOf](#tostring-valueof)
  * [Создание объектов через new](#Создание-объектов-через-new)
- [Classes #2](#classes-2)
  * [module.exports](#module.exports)
  * [Явное указание this: call, apply](#Явное-указание-this-call-apply)
  * [Привязка контекста: bind](#Привязка-контекста-bind)
  * [Наследование](#Наследование)
  * [instanceof](#instanceof)
- [DOM #1](#dom-1)
  * [Поиск элементов в DOM](#Поиск-элементов-в-dom)
  * [Содержимое элементов](#Содержимое-элементов)
  * [Атрибуты элементов](#Атрибуты-элементов)
  * [Работа с классами элементов](#Работа-с-классами-элементов)
- [DOM #2](#dom-2)
  * [Операции с элементами DOM](#Операции-с-элементами-dom)
  * [Стили элемента](#Стили-элемента)
  * [Размеры элемента](#Размеры-элемента)
  * [Скролл](#Скролл)
  * [События](#События)
  * [Объект Event](#Объект-event)
- [DOM #3](#dom-3)
  * [Делегирование](#Делегирование)
  * [Событие onload](#Событие-onload)
- [API #1](#api-1)
  * [HTTP](#http)
  * [fetch](#fetch)
  * [npm init](#npm-init)
  * [npm install](#npm-install)
  * [npm scripts](#npm-scripts)
  * [json-server](#json-server)

---

## Basics 1
### Переменные

Для объявления переменных в JavaScript, используются следующие конструкции: `var`, `let` и `const`.

`var` – определяет переменную в поле видимости ближайшей функции. Возможно переопределение.

Пример:
```js
var a = 1;

function test() {
  var b = 2;
}

if (a === 1) {
  var c = 3;
}

a; // 1
b; // undefined
c; // 3

a = 2;

a; // 2
```

---

`let` – определяет переменную в поле видимости ближайшего блока. Возможно переопределение.

```js
let a = 1;

function test() {
  let b = 2;
}

if (a === 1) {
  let c = 3;
}

a; // 1
b; // undefined
c; // undefined

a = 2;

a; // 2
```

---

`const` – определяет переменную в поле видимости ближайшего блока. Переопределение невозможно.

```js
const a = 1;

function test() {
  const b = 2;
}

if (a === 1) {
  const c = 3;
}

a; // 1
b; // undefined
c; // undefined

a = 2; // Error
```

---

На практике я советую использовать практически всегда `const`, за редким исключением, когда переменную необходимо
переопределить в зависимости от неких условий, тогда необходимо использовать `let`. Причин использовать `var`, в
общем-то, нет.


[К оглавлению](#-Оглавление)

### Типы данных

* Число (Number)
* Строка (String)
* Логический (Boolean)
* Специальное значение "null"
* Специальное значение "undefined"
* Объекты (Object)
* Массивы
* Функции

[К оглавлению](#-Оглавление)

### Операторы

```js
1 == '1'; // true Сравнение
1 === 1; // true Идентичность
!false; // true Отрицание
2 > 1; // true Больше
2 >= 1; // true Больше или равно
1 < 2; // true Меньше
1 <= 2; // true Меньше или равно
1 + 1; // 2 Плюс
1 - 1; // 0 Минус
4 / 2; // 2 Деление
4 * 2; // 8 Умножение
5 % 2; // 1 Остаток
```

[К оглавлению](#-Оглавление)

### Условия

Оператор `if`

```js
if (2 > 1) {
  console.log(1);
} else if (2 > 2) {
  console.log(2);
} else {
  console.log(3) ;
}
```

---

Оператор `?`

```js
const a = 2 > 1 ? true : false; // true
```

[К оглавлению](#-Оглавление)

### Циклы

Цикл `for`

```js
let i;
for (i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
```

[К оглавлению](#-Оглавление)

### Запуск программ Node

```
$ node index.js
```

[К оглавлению](#-Оглавление)

### Передача параметров Node

```
$ node index.js arg1 arg2 arg3
```

```js
// index.js
console.log(process.argv.slice(2)); // ["arg1", "arg2", "arg3"]
```

[К оглавлению](#-Оглавление)

---

## Basics 2
### Функции

```js
function sum(arg1, arg2) {
  return arg1 + arg2;
}

sum(1, 2); // 3
```

```js
const sum = (arg1, arg2) => arg1 + arg2;

sum(1, 2); // 3
```
[К оглавлению](#-Оглавление)

### Замыкания
```js
const createCounter = () => {
  let c = 0;
  return () => {
    c = c + 1;
    return c;
  };
};

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3

console.log(c); // ReferenceError
```

[К оглавлению](#-Оглавление)

### Методы массивов

*Map:*
```js
let numbers = [1, 2, 3, 4, 5];
numbers = numbers.map((number) => number + 1);
console.log(numbers); // [2, 3, 4, 5, 6]
```

*Filter:*
```js
let numbers = [1, 2, 3, 4, 5];
numbers = numbers.filter((number) =>
  number % 2 === 0
);
console.log(numbers); // [2, 4]
```

*Find:*
```js
const numbers = [1, 2, 3, 4, 5];
const result = numbers.find((number) => number === 1);
console.log(result); // 1
```

*Includes:*
```js
const numbers = [1, 2, 3, 4, 5];
const result = numbers.includes((number) => number === 1);
console.log(result); // true
```

*Reduce:*
```js
const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce((acc, number) => acc + number, 0);
console.log(result); // 15
```

[К оглавлению](#-Оглавление)

### JSON

*JSON.stringify:*
```js
const data = [1, 2, 3, 4, 5];

const jsonData = JSON.stringify(data); // "[1, 2, 3, 4, 5]"
```

*JSON.parse:*
```js
const data = [1, 2, 3, 4, 5];

const jsonData = JSON.stringify(data); // "[1, 2, 3, 4, 5]"

const backToData = JSON.parse(jsonData); // [1, 2, 3, 4, 5]
```
[К оглавлению](#-Оглавление)

---

## Classes 1
### fs, path

```js
const path = require('path'); // Подключаем модуль path
const fs = require('fs'); // Подключаем модуль fs

const pathToFile = path.resolve(__dirname, 'index.txt'); // Определяем путь к файлу. __dirname содержит путь к исполняемой программой
const content = fs.readFileSync(pathToFile, 'utf8'); // Считываем файл, utf8 – кодировка файла

console.log(content);
```

[К оглавлению](#-Оглавление)

### Методы объектов

```js
const user = {
  name: 'Michael',
  getName: function() {
    return this.name;
  }
};

user.getName(); // "Michael"
```

[К оглавлению](#-Оглавление)

### toString, valueOf

```js
const user = {
  name: 'Andy Warhol',
};

console.log(String(user)); // [object Object]
```

```js
const user = {
  name: 'Andy Warhol',
  toString: function() {
    return 'Andy Warhol';
  }
};

console.log(String(user)); // 'Andy Warhol'
```

```js
const user = {
  name: 'Andy Warhol',
  valueOf: function() {
    return 1;
  }
};

console.log(Number(user)); // 1
```

[К оглавлению](#-Оглавление)

### Создание объектов через new

```js
function Student(name) {
  // this = {};

  // add properties and methods to this

  this.name = name;
  this.isExcellent = true;

  // return this;
}

const student = new Student('Johnny');
console.log(student);
// { name: 'Johhny', isExcellent: true };
```

[К оглавлению](#-Оглавление)

---

## Classes 2
### module.exports

*exports:*
```js
// index.js
const utils = require('./utils');

utils.average([1, 2, 3, 4, 5]);
```

```js
// utils.js
function average(arr) { /* code... */ }

exports.average = average;
```

*module.exports:*
```js
// index.js
const average = require('./average');

average([1, 2, 3, 4, 5]);
```

```js
// utils.js
function average(arr) { /* code... */ }

module.exports = average;
```
[К оглавлению](#-Оглавление)

### Явное указание this: call, apply

*call:*
```js
function greetUser(greeting) {
  console.log(greeting + this.firstName + ' ' + this.lastName);
}

const user = { firstName: 'Jaimes', lastName: 'Johnson' };

greetUser.call(user, 'Hello, '); // "Hello, Jaimes Johnson"
```

*Одалживание метода:*
```js
function printArgs() {
  // arr.slice() copies all arguments
  const args = [].slice.call(arguments);
  console.log(args.join(' '));
}

printArgs('Hello', 'whole', 'new', 'world');
// Hello whole new world
```

*apply:*
```js
function greetUser(greeting) {
  console.log(greeting + this.firstName + ' ' + this.lastName);
}

const user = { firstName: 'Jaimes', lastName: 'Johnson' };

greetUser.call(user, 'Hello, '); // "Hello, Jaimes Johnson"
greetUser.apply(user, ['Hello, ']); // "Hello, Jaimes Johnson"
```

[К оглавлению](#-Оглавление)

### Привязка контекста: bind

*bind:*
```js
function greet() {
  console.log(this);
}

const g = greet.bind('Hello!');
g(); // "Hello!"
```

*карринг:*
```js
function mul(a, b) {
  return a * b;
}

const double = mul.bind(null, 2);
double(3); // mul(2, 3); -> 6
```

[К оглавлению](#-Оглавление)

### Наследование

```js
function Machine() {
  let enabled = false;
  this.enable = function() { enabled = true; };
  this.disable = function() { enabled = false; };
  this.isEnabled = function() { return enabled; };
}

function Car() {
  Machine.apply(this, arguments);
  this.type = 'BMW';
}

const car = new Car();
car.enable();
console.log(car.isEnabled()); // true
console.log(car.type); // "BMW"
```

[К оглавлению](#-Оглавление)

### instanceof

```js
function Student(name) {
  this.name = name;
}

const student = new Student('Ron');

student instanceof Student; // true
student instanceof Object; // true
student instanceof Number; // false
```

[К оглавлению](#-Оглавление)

---

## DOM 1
### Поиск элементов в DOM

*getElementById:*
```html
<div id="root"></div>
```
```js
const $div = document.getElementById('root');
```

---

*querySelector:*
```html
<div class="root"></div>
```
```js
const $div = document.querySelector('.root');
```

---

*querySelectorAll:*
```html
<div class="root"></div>
<div class="root"></div>
<div class="root"></div>
```
```js
const $divs = [].slice.call(document.querySelectorAll('.root'));
```

[К оглавлению](#-Оглавление)

### Содержимое элементов

*innerHTML:*
```html
<body>
  <strong>Test</strong>
</body>
```
```js
document.body.innerHTML; // "<strong>Test</strong>"
document.body.innerHTML = '<strong>Replaced</strong>';
```

---

*outerHTML:*
```html
<body>
  <strong>Test</strong>
</body>
```
```js
document.body.outerHTML; // "<body><strong>Test</strong></body>"
```

---

*textContent:*
```html
<body>
  <strong>Test</strong>
</body>
```
```js
document.body.textContent; // "Test"
```

[К оглавлению](#-Оглавление)

### Атрибуты элементов

```html
<body class="root">
  <strong>Test</strong>
</body>
```

```js
document.body.hasAttribute('class'); // true
document.body.getAttribute('class'); // "root"
document.body.setAttribute('class', 'test'); // <body class="test"></body>
document.body.removeAttribute('class'); // <body></body>
```

[К оглавлению](#-Оглавление)

### Работа с классами элементов

```html
<body class="root">
  <strong>Test</strong>
</body>
```

```js
document.body.classList.contains('root'); // true
document.body.classList.add('active'); // <body class="root active"></body>
document.body.classList.remove('root'); // <body></body>
document.body.classList.toggle('active'); // <body class="root active"></body>
```

[К оглавлению](#-Оглавление)

---

## DOM 2
### Операции с элементами DOM

*Создание:*
```js
const $div = document.createElement('div');
```

*Добавление:*
```js
const $div = document.createElement('div');
$div.innerHTML = 'Hello, world!';
document.body.append($div);
```

```js
const $div = document.createElement('div');
$div.innerHTML = 'Hello, world!';
document.body.prepend($div);
```

```js
const $div = document.createElement('div');
$div.innerHTML = 'Hello, world!';
document.body.after($div);
```

```js
const $div = document.createElement('div');
$div.innerHTML = 'Hello, world!';
document.body.before($div);
```

```js
const $div = document.createElement('div');
$div.innerHTML = 'Hello, world!';
document.body.replaceWith($div);
```

*Удаление:*
```js
const $div = document.createElement('div');
$div.innerHTML = 'Hello, world!';
document.body.append($div);
$div.parentNode.removeChild($div);
```

[К оглавлению](#-Оглавление)

### Стили элемента

```js
document.body.backgroundColor = 'red'; // Добавляем свойство

// background-color -> backgroundColor
// padding-top -> paddingTop
// border-top-width -> borderTopWidth

document.body.backgroundColor = ''; // Удаляем свойство
```

[К оглавлению](#-Оглавление)

### Размеры элемента

```js
document.body.getBoundingClientRect(); // Размеры и позиция элемента
window.innerHeight; // Высота окна
window.innerWidth; // Ширина окна
```
[К оглавлению](#-Оглавление)

### Скролл

```js
const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Текущие положение
window.scrollTo(x, y); // Проскроллить страницу
$el.scrollIntoView(top); // top = true | false – Проскроллить до элемента

```

```css
document.body.style.overflow = 'hidden'; /* Запретить скролл на странице */
```

[К оглавлению](#-Оглавление)

### События

```html
<button type="button" onclick="onClick()">
  Click me
</button>

<script type="text/javascript">
  function onClick() {
    console.log('Click');
  }
</script>
```

```html
<button type="button" id="button">
  Click me
</button>

<script type="text/javascript">
  document.getElementById('button').onclick = function() {
    console.log('Click');
  }
</script>
```

```html
<button type="button" id="button">
  Click me
</button>

<script type="text/javascript">
  document.getElementById('button').addEventListener('click', function() {
    console.log('Click');
  });
</script>
```

[К оглавлению](#-Оглавление)

### Объект Event

```js
$el.onclick = (event) => {
  console.log(event);
  event.type; // click
  event.currentTarget; // $el
};
```

[К оглавлению](#-Оглавление)

---

## DOM 3
### Делегирование
[К оглавлению](#-Оглавление)

### Событие onload
[К оглавлению](#-Оглавление)

---

## API 1
### HTTP
[К оглавлению](#-Оглавление)

### fetch
[К оглавлению](#-Оглавление)

### npm init
[К оглавлению](#-Оглавление)

### npm install
[К оглавлению](#-Оглавление)

### npm scripts
[К оглавлению](#-Оглавление)

### json-server
[К оглавлению](#-Оглавление)

---
