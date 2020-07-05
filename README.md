<h1>Gulp готовый конфиг</h1>
<h3>Установка: </h3>
Для начала установить <strong>nodejs/npm/gulp</strong> <i>(ищите в google)</i> <br>
Потом в проекте прописать <strong>npm install</strong> <i>(установить необходимые зависимости)</i>
<hr>
<h3>Команды:</h3>
<strong>gulp start</strong> - запускает лайв сборщик <br>
<strong>gulp build</strong> - создаёт готовые файлы без запуска фронт энда
<hr>
<h3>Коротко о структуре:</h3>
<strong>/src</strong>- работа с файлами  <br>
<strong>/build</strong> - при компиляции всё сохраняется сюда 
<hr>
<h3>Состав Gulp конфига:</h3>
	"gulp-sass" - название само за себя говорит  <br>
    "gulp-clean-css" - минификация конечных css файлов  <br>
	"gulp-shorthand" - уменьшает сами стили css, для облегчённого чтения  <br>
    "gulp-watch" - слежка за изменениями файлов  <br>
 	"browser-sync" - автоматическая перезагрузка браузера при изменении файлов  <br>
    "del" - удаление всех файлов в каталоге  <br>
    "gulp-autoprefixer" - изменение названия конечных файлов  <br>
    "gulp-imagemin" - минификатор (оптимизатор) картинок  <br>
	"imagemin-pngquant" - оптимизация png файлов  <br>
	 "gulp-replace"  - позволяет изменять данные в файле по ключевым словам (необходимо для спрайтирования svg файлов в 1 конечный файл)  <br>
    "gulp-svgstore" - собирает файлы svg и сохраняет их в единный спрайт  <br>
	"gulp-rigger"  - вставка html файлов в другие html файлы как блоки //= path/name.html  <br>
    "gulp-plumber" - не позволяет крашнуться всей системе во время ошибок  <br>
    "gulp-rename" - позволяет переименовывать конечные файлы  <br>
    "gulp-uglify" - минификация js файлов (отключено, опционально)  <br>
    "gulp-wait" - задержка перед началом других пайпов  <br>
<h3>Структура папки "gulp":</h3>
<strong> config.js</strong> - в нём настроены все пути ввода и вывода файлов сборки  <br>
<strong>/tasks</strong> - находятся все задачи сборок, можете открыть каждый для ознакомления
<hr>
<h3>Структура папки /src имеет вид:</h3>
<ul>
<li>/src/fonts - здесь хранятся все шрифты проекта <br>
<i>конечный путь сборки /build/fonts/*</i>
</li> <br>

<li>/src/images - здесь хранятся все изображения проекта <br>
<i>конечный путь сборки /build/images/*.png\svg\jpeg\jpg</i>
</li> <br>

<li>/src/js - здесь хранятся все файлы.js <br>
<i>конечный путь сборки /build/js/*.js</i>
</li> <br>

<li>/src/sprites - здесь хранятся все svg спрайты <br>
<i>конечный путь сборки /build/images/sprite.svg</i>
</li> <br>

<li>/src/vendor/js - здесь хранятся сторонние js файлы (библиотеки) <br>
<i>конечный путь сборки /build/js/vendor/*.js</i>
</li> <br>

<li>/src/vendor/css - здесь хранятся сторонние css файлы (библиотеки) <br>
<i>конечный путь сборки /build/css/vendor/*.css</i>
</li> <br>

<li>/src/style - здесь хранятся .scss файлы <br>
<i>конечный путь сборки /build/css/main.css</i>
</li> <br>

<li>/src/pages - здесь хранятся .html файлы <br>
<i>конечный путь сборки /build/*.html</i>
</li> <br>
</ul>
<hr>
<h3>Правила создания проектов (которых можно придерживаться):</h3>
 <h4>Каталог src/styles</h4>
<br>В нём необходимо создавать scss файлы, где главным файлом является <strong>main.scss</strong>, куда подключаются последующие файлы (просто создать и не подключить не выйдет, в сборку не попадут). Открыв файл, будет понятна структура подключения. <br>
<br>*** В папке <strong>src/styles</strong> есть папка <strong>common</strong> в данной папке будут храниться scss стили общих часто встречающихся блоков. <i>(например: header.scss, footer.scss, modal.scss)</i><br>
<br>*** В папке <strong>src/styles</strong> есть папка <strong>components</strong> в данной папке будут храниться scss каких либо интерактивных элементов. <i>(например: input.css, button.scss, dropdown.scss)</i><br>
<br>*** В папке <strong>src/styles</strong> есть папка <strong>core</strong> где лежат файлы:<br>
<strong>- base.scss</strong> базовые настройки сайта (отступы, и т.п. блоки) <br>
<strong>- fonts.scss</strong> настройки подключения шрифтов<br>
<strong>- mixins.scss</strong> очевидно миксины (анимации, калк функции и т.п.)<br>
<strong>- reset.scss</strong> файл который ясно что делает (если не нравится, используйте нормалайз, гугл в помощь)<br>
<strong>- variables.scss</strong> здесь пишутся переменные (цвета, отступы и всё что вам придёт в голову)<br>
<br>*** В папке <strong>src/styles</strong> есть папка <strong>includes</strong> где будут лежать ещё другие папки, допустим index, auth, post, adminpanel и т.п. которые отвечают за одноимённые .html странички, в которых будут лежать scss файлы индивидуальных блоков (правило создания: название класса = название файла)<br><br>
<hr>
<h4>Каталог src/pages</h4>
<br>В нём необходимо в первом уровне создавать сами странички (index.html, auth.html, post.html, adminpane.html и т.п.), эти файлы попадают в папку <strong>/build/название.html</strong>
<br>*** В папке <strong>src/pages</strong> есть папка <strong>common</strong> в данной папке будут храниться часто повторяющиеся html блоки.
<br><i>(например: header.html, footer.html и т.п. Подключаться в html разметке будут файлы вот так: //= common/header.html)</i><br>
<br>*** В папке <strong>src/pages</strong> есть папка <strong>includes</strong> где будут лежать ещё другие папки, допустим index, auth, post, adminpanel и т.п. которые отвечают за разгрузку в основной (родительский) файл для облегчения читаемости разметки основных (родительских) файлов из папки <strong>src/pages</strong>. В данных папках будут находиться html файлы где лежат секции блоков из родительского html файла. (правило создания папки: название html родительского файла = название папки, название секции в родительском html документе = название html файла в данной папке)
<br><i>(например: <strong>src/pages/includes/index/slider.html</strong>, ясно что данный html файл (блок разметки) относится к родителю index.html. Подключаться файл будет вот так: //= includes/index/slider.html)</i><br>
<hr>
<h4>Каталог src/sprites</h4>
Ну в данном каталоге должны лежать все <strong>svg</strong> файлы, которые компилируются в 1 файл по пути <strong>/build/images/sprite.svg</strong><br>
<i>(например: в папке <strong>src/sprites</strong> положим файл <strong>Phone.svg</strong>, после сборки его можно использовать в html разметке. Данный файл будет иметь префикс icon-Phone. Т.е. каждый svg файл лежащий в папке спрайтов будет иметь префикс icon-[Name]. Что бы в дальнейшем использовать этот спрайт, в html разметке необходимо вставить svg тэг:  ```html <svg class="myIcon"><use xlink:href="images/sprite.svg#icon-Phone"></use></svg>``` где указываем путь к спрайту#префикс-названиеСпрайта. Это позволяет в дальнейшем обращаться к svg по scss)</i>

