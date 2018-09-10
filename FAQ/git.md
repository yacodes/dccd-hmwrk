# Основные команды git

```sh
$ git init # Инициализирует репозиторий в текущем месте файловой системы
$
$ git clone https://github.com/yakunichevaleksandr/dccd-hmwrk.git # Клонирует репозиторий (необходимо заменить ссылку)
$
$ git remote add origin https://github.com/yakunichevaleksandr/dccd-hmwrk.git # «Связывает» локальный репозиторий с github
$
$ git add index.js # добавляет указанные файлы в отслеживаемые
$
$ git add . # добавляет все файлы в отслеживаемые
$
$ git status # отображает какие файлы добавлены (зелёным), а какие нет (красным)
$
$ git commit -m "Commit message" # Подтверждает и сохраняет все добавленные изменения
$
$ git push origin master # Подтверждает и сохраняет все добавленные изменения
$
$ git branch new-feature # Создаёт ветку в репозитории
$
$ git checkout new-feature # Переключает репозиторий в ветку new-feature
$
$ git checkout master # Переключает репозиторий в основную ветку master
```
