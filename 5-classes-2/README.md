# Домашнее задание к уроку 5 – Классы в JavaScript #2

Написать приложение, которое:
1. Состоящее из 3 файлов: `user.class.js`, `admin.class.js`, `index.js`
2. В файле `user.class.js` должен быть описан класс пользователя с ключами `firstName` (строка), `lastName` (строка), `hasAccess` (`false`), `isLoggedIn` (`false`) и
   методами `login`, `logout`
3. Метод `login` должен изменять значение `isLoggedIn` на `true`, если ключ `hasAccess` равен `true`
4. Метод `logout` должен изменять значение `isLoggedIn` на `false`
4. В файле `admin.class.js` должен быть описан класс `Admin`, наследующий функционал от класса пользователя, но ключ
   `hasAccess` должен быть в значении `true`.
5. В файле `index.js` создать по одному объекту `User` и `Admin` вызвать у них метод `login` и вывести объекты в консоль

Пример вызова приложения:
```bash
$ node index.js
```
