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
- [API #3](#api-3)
  * [Express GET](#express-get)
  * [Express Middleware](#express-middleware)
  * [Express POST](#express-post)
  * [Express PUT](#express-put)
  * [Express DELETE](#express-delete)
- [API #5](#api-5)
  * [Promise](#promise)
- [Module Bundlers](#module-bundlers)
  * [Browserify](#browserify)
  * [Webpack](#webpack)
  * [Create react app](#create-react-app)
- [React 1](#react-1)
  * [ReactDOM](#reactdom)
  * [React variables](#react-variables)
  * [Functional component](#functional-components)
  * [Props](#props)
  * [Class components](#class-components)
  * [State](#state)
  * [Lifecycle](#lifecycle)

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

```js
<button data-counter>1</button>
<button data-counter>2</button>

<script>
  document.onclick = event => {
    if (!event.target.hasAttribute('data-counter')) return;
    const counter = event.target;
    counter.innerHTML++;
  };
</script>
```

[К оглавлению](#-Оглавление)

### Событие onload

```html
<script>
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Content loaded');
  });

  document.querySelector('img').onload = () => {
    console.log('loaded!')
  };

  window.onload = () => {
    console.log('Window loaded')
  };
</script>

<div id="test"></div>
<img src="/test.jpg"/>
```

[К оглавлению](#-Оглавление)

---

## API 1
### HTTP
```
GET - Fetches element/collection
POST - Creates element
PUT - Replaces element
DELETE - Removes element
```
[К оглавлению](#-Оглавление)

### fetch
```js
fetch('https://aws.random.cat/meow')
  .then((response) => response.json())
  .then((data) => console.log(data))
```
[К оглавлению](#-Оглавление)

### npm init
```
$ npm init
$ npm init --yes
```
[К оглавлению](#-Оглавление)

### npm install
```
$ npm install --save to-camel-case
$ npm install --global wttr
```
[К оглавлению](#-Оглавление)

### npm scripts
```
// package.json
"scripts": {
  "hello": "echo 'Hello world'"
}

$ npm run hello # "Hello world"
```
[К оглавлению](#-Оглавление)

### json-server
```
$ npm install --global json-server
$ json-server --watch db.json
```
[К оглавлению](#-Оглавление)

---

## API 3
### Express GET
Для использование фреймворка `Express.js` сперва необходимо:
1. Инициализировать в директории с будущим приложением `package.json`
```
$ npm init --yes
```
2. Установить модуль `Express.js`
```
$ npm install express --save
```
3. Создать файл `index.js` с программой, описывающей работу API-сервера:
```js
const express = require('express'); // Подключаем модуль express.js
const app = express(); // Инициализируем приложение
const port = 3000; // Записываем в константу порт на котором будет работать приложение

app.get('/', (req, res) => { // Описываем поведение сервера при HTTP GET запросе на адрес /
  console.log(req.query); // Сюда попадает объект query-параметров при запросе, например localhost:3000/?offset=1. req.query.offset будет равен 1 в таком случае
  res.send('Hello World!'); // Отвечаем строкой "Hello World!"
});

app.listen(port, () => { // Запускаем сервер на порту 3000
  console.log(`App listening on port ${port}!`); // После запуска выводим в консоль сообщение об успешном запуске
});
```
4. Запустить сервер с помощью команды:
```
$ node index.js
```

[К оглавлению](#-Оглавление)

### Express Middleware
Фреймворк `Express.js` использует концепцию `middlewares`. Это промежуточные функции, вызываемые при любом запросе к
серверу с целью получить/записать/инициализировать какую-то дополнительную, необходимую нам информацию.
```js
const express = require('express'); // Подключаем модуль express.js
const app = express(); // Инициализируем приложение
const port = 3000; // Записываем в константу порт на котором будет работать приложение

app.use((req, res, next) => { // Регистрируем промежуточную функцию-обработчик
  console.log('Path: ' + req.path); // Выводим в консоль путь к которому произошёл запрос
  next(); // Передаём выполнение дальше
});

app.get('/', (req, res) => { // Описываем поведение сервера при HTTP GET запросе на адрес /
  res.send('Hello World!'); // Отвечаем строкой "Hello World!"
});

app.listen(port, () => { // Запускаем сервер на порту 3000
  console.log(`App listening on port ${port}!`); // После запуска выводим в консоль сообщение об успешном запуске
});
```

[К оглавлению](#-Оглавление)

### Express POST
HTTP POST запросы концептуально предполагают добавление элементов в коллекцию. Но для создания адекватного API нам
необходимо получать доступ к телу POST запроса в формате json. Для этого существует модуль `body-parser`.

Для его установки необходимо выполнить в терминале следующую команду:
```
$ npm install body-parser --save
```

После чего подключить его в нашем приложении:
```js
const express = require('express'); // Подключаем модуль express.js
const bodyParser = require('body-parser'); // Подключаем модуль body-parser
const app = express(); // Инициализируем приложение
const port = 3000; // Записываем в константу порт на котором будет работать приложение

app.use(bodyParser.json()); // Инициализируем модуль в рамках нашего приложения

app.post('/', (req, res) => { // Описываем функцию, выполняемую при POST запросе
  console.log(req.body); // В req.body хранится тело запроса

  // Здесь должен быть код, добавляющий элемент в коллекцию

  res.send('OK'); // Отвечаем строкой "OK"
});

app.listen(port, () => { // Запускаем сервер на порту 3000
  console.log(`App listening on port ${port}!`); // После запуска выводим в консоль сообщение об успешном запуске
});
```

[К оглавлению](#-Оглавление)

### Express PUT
HTTP PUT запросы концептуально предполагают замену элементов в коллекции.
```js
const express = require('express'); // Подключаем модуль express.js
const bodyParser = require('body-parser'); // Подключаем модуль body-parser
const app = express(); // Инициализируем приложение
const port = 3000; // Записываем в константу порт на котором будет работать приложение

app.use(bodyParser.json()); // Инициализируем модуль в рамках нашего приложения

app.put('/:id', (req, res) => { // Описываем функцию, выполняемую при POST запросе
  console.log(req.body); // В req.body хранится тело запроса
  console.log(req.params.id); // Выводим в консоль идентификатор элемента (попадает из пути запроса в описании выше /:id)

  // Здесь должен быть код, заменяющий элемент в коллекции

  res.send('OK'); // Отвечаем строкой "OK"
});

app.listen(port, () => { // Запускаем сервер на порту 3000
  console.log(`App listening on port ${port}!`); // После запуска выводим в консоль сообщение об успешном запуске
});
```

[К оглавлению](#-Оглавление)

### Express DELETE
HTTP DELETE запросы концептуально предполагают удаление элементов из коллекции.
```js
const express = require('express'); // Подключаем модуль express.js
const app = express(); // Инициализируем приложение
const port = 3000; // Записываем в константу порт на котором будет работать приложение

app.delete('/:id', (req, res) => { // Описываем функцию, выполняемую при DELETE запросе
  console.log(req.params.id); // Выводим в консоль идентификатор элемента (попадает из пути запроса в описании выше /:id)

  // Здесь должен быть код, удаляющий элемент из коллекции

  res.send('OK'); // Отвечаем строкой "OK"
});

app.listen(port, () => { // Запускаем сервер на порту 3000
  console.log(`App listening on port ${port}!`); // После запуска выводим в консоль сообщение об успешном запуске
});
```

[К оглавлению](#-Оглавление)

---

## API 5
### Promise

*Создание Promise:*
```js
new Promise(function (ok, err) {
  doStuff(function () { // fs.readFile for example
    if (success) {
      ok();
    } else {
      err();
    }
  });
})
```

*Использование Promise:*
```js
promise
  .then(function success() {}, function error() {})
  .catch(function error() {})
```

[К оглавлению](#-Оглавление)

---

## Module Bundlers
### Browserify

*Установка:*
```sh
$ npm install --global browserify watchify
```

*Запуск:*
```sh
$ browserify index.js -o output.js
```

*Запуск в режиме разработки:*
```sh
$ watchify index.js -o output.js
```
[К оглавлению](#-Оглавление)

### Webpack
*Установка:*
```sh
$ npm install --global webpack webpack-cli
```

*Пример конфигурации:*
```js
const path = require('path');

module.exports = {
  mode: 'development', // Режим
  entry: './index.js', // Входной файл
  output: {
    path: path.resolve(__dirname), // Путь, куда записать результат
    filename: 'bundle.js' // Название файла с результатом
  },
  module: { // Модули для загрузки файлов, отличных от .js
    rules: [
      {
        test: /\.css$/, // Все файлы с расширением .css
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      }
    ]
  }
};
```

*Запуск в режиме разработки:*
```sh
$ webpack-dev-server --inline --hot
```

*Запуск:*
```sh
$ webpack
```

[К оглавлению](#-Оглавление)

### Create react app

*Установка:*
```sh
$ npx create-react-app app-name
```

*Запуск:*
```sh
$ npm run start
```

*Пример простого приложения:*
```js
const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

[К оглавлению](#-Оглавление)

---

## Module Bundlers
### ReactDOM

*Рендеринг компонента:*
```js
ReactDOM.render(
  <h1>Hello, world</h1>,
  document.getElementById('root')
);
```

*Удаление компонента:*
```js
ReactDOM.unmountComponentAtNode(document.getElementById('root'));
```

[К оглавлению](#-Оглавление)

### React variables

*Использование переменных в React:*
```js
const className = "greeting";
const text = "Hello, world!";

ReactDOM.render(
  <h1 className={className}>{text}</h1>,
  document.getElementById('root')
);
```

[К оглавлению](#-Оглавление)

### Functional components

*Создание функциональных компонентов:*
```js
const Header = () => (
  <h1 className="header">Hello, world!</h1>
);

ReactDOM.render(
  <Header/>
  document.getElementById('root')
);
```

[К оглавлению](#-Оглавление)

### Props

*Передача свойств компонентам:*
```js
const Header = ({className, children}) => (
  <h1 className={cx(className, 'header')}>{children}</h1>
);

ReactDOM.render(
  <Header className="greeting">Hello, world!</Header>,
  document.getElementById('root')
);
```

[К оглавлению](#-Оглавление)

### Class components

*Классовые компоненты:*
```js
class Header extends React.Component {
  render() {
    const {children, className} = this.props;

    return (
      <h1 className={cx(className, 'header')}>{children}</h1>
    );
  }
}

ReactDOM.render(
  <Header className="greeting">Hello, world!</Header>,
  document.getElementById('root')
);
```

[К оглавлению](#-Оглавление)

### State

*Состояние классовых компонентов:*
```js
class Header extends React.Component {
  constructor() {
    this.state = {
      backgroundColor: 'red'
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      backgroundColor: this.state.backgroundColor === 'red' ? 'blue' : 'red'
    });
  }

  render() {
    const {children, className} = this.props;
    const backgroundColor = this.state;

    return (
      <h1
        className={cx(className, 'header')}
        style={{backgroundColor: backgroundColor}}
        onClick={onClick}
        >
        {children}
      </h1>
    );
  }
}
```

[К оглавлению](#-Оглавление)

### Lifecycle

*Жизненный цикл компонента:*
```js
class Header extends React.Component {
  componentDidMount() {
    console.log('Mounted!');
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
  }

  componentWillUnmount() {
    console.log('unmounted!')
  }

  render() {
    console.log('render!');
    const {children, className} = this.props;

    return (
      <h1 className={cx(className, 'header')}>
        {children}
      </h1>
    );
  }
}
```

![React lifecycle](https://cdn-images-1.medium.com/max/2000/1*sn-ftowp0_VVRbeUAFECMA.png "React lifecycle")

[К оглавлению](#-Оглавление)

---
