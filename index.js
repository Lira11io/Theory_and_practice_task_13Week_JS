//Ответ на 1 вопрос
//let date = new Date(2021, 0, 24, 22, 51);
//console.log(date);

//Ответ на 3 вопрос
const getSecondsToTomorrow = () => {
  let today = new Date(); //объявляем переменную с сегодняшней датой
  let hour = today.getHours(); //получаем количество часов прошедших в сегодняшнем дне
  let minutes = today.getMinutes(); //получаем количество минут прошедших в сегодняшнем дне
  let seconds = today.getSeconds(); //получаем количество секунд прошедших в сегодняшнем дне
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds; //вычисляем общее количество секунд прошедших сегодня
  let totalSecondsInADay = 86400; //объявляем переменную с общим количеством секунд за день

  return totalSecondsInADay - totalSecondsToday; //получаем оставшееся количество секунд до завтра
};
console.log(getSecondsToTomorrow()); //выводим результат вычисления функции в консоль

//ответ на 5 вопрос
/* let d = new Date(2016, 2, 9);
console.log(d); */

//ответ на 7 вопрос
let date = new Date();
console.log(date.getUTCHours());

//Ответ на 9 вопрос
/* let d = new Date();
let y = d.getFullYear();
console.log(y); */

//Ответ на 10 вопрос
let y = new Date();
let d = y.getDate();
console.log(d);

//////////Решение практического задания

//Получаем переменную, куда пользователь вводит ФИО
const fio = document.querySelector(".service__input_fio");
/* console.log(fio); */

//получаем переменную, куда пользователь вводит ссылку на аватар
const avatar = document.querySelector("#avatar");

//получаем переменную, куда пользователь вводит комментарий
const comment = document.querySelector(".service__input_comment");
/* console.log(comment); */

//Получаем переменную для кнопки
const button = document.querySelector(".service__input_button");

//Получаем переменную, куда будет попадать аватар пользователя
const chat = document.querySelector(".service__subtitle_foto");
/* console.log(chat); */

//записываем в переменную ссылку на фото, которое ввел пользователь
let avatarYes = avatar.value;

//Получаем переменную, куда будет попадать ФИО пользователя
const fio1 = document.querySelector(".service__subtitle_fio");
/*console.log(fio1);*/

//Записываем в переменную ФИО, которые ввел пользователь
let fioV = fio.value;

//Объявляю переменную с текущими датой и временем
const dateCom = new Date();

//Получаю переменную для отображения текущей даты и времени сообщения в чате
const dateMess = document.querySelector(".service__subtitle_date");

//Получаем переменную, куда будет попадать комментарий пользователя
const message = document.querySelector(".service__subtitle_comment");

//Получаем переменную для первого чекбокса
const checkBoxYes = document.querySelector("#checkbox-yes");
//console.log(checkBoxYes);
const checkBoxNo = document.querySelector("#checkbox-no");

checkBoxYes.addEventListener("change", () => {
  if (checkBoxYes.checked) {
    fio.style.display = "blok";
  } else {
    fio.style.display = "none";
  }

  //получаем массив фотографий
  let randomFoto = new Array();
  randomFoto[0] = "assets/img/anime.jpg";
  randomFoto[1] = "assets/img/brunette.jpg";
  randomFoto[2] = "assets/img/cat.jpg";
  randomFoto[3] = "assets/img/girl_with_owl.jpg";
  randomFoto[4] = "assets/img/smile.jpg";
  randomFoto[5] = "assets/img/raccoon_rocket.jpg";

  //создаем новую переменную, чтобы использовать ее для вывода в чат всех сообщений
  let totalString = "";

  //иВанОва лиДия петРоВна
  //https://img3.akspic.ru/previews/0/8/5/2/7/172580/172580-bakenbardy-kot-koshachih-seryj_cvet-koshki_malogo_i_srednego_razmera-360x780.jpg
  //купи viagRa xxx

  //Функция для вывода данных пользователя в чат по нажатию на кнопку
  button.addEventListener("click", () => {
    if (avatar.value === "") {
      //если пользователь не загрузил аватар
      let numberFoto = Math.floor(Math.random() * randomFoto.length); //случайный индекс фото в массиве
      chat.innerHTML = `<img class="service__img" src="${randomFoto[numberFoto]}" alt="аватар пользователя">`; //выводим рандомное фото в чат
    } else {
      chat.innerHTML = `<img class="service__img" src ="${avatarYes}" alt="аватар пользователя"/>`; //добавляем аватар пользователя в чат
    }

    if (fio.value === "") {
      fio1.textContent = "username";
    } else {
      const arr = fio.value.split(" "); //получаю массив полного имени
      const arrUpp = []; //создаю новый пустой массив
      for (let i = 0; i < arr.length; i++) {
        arrUpp.push(
          (arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase()) //заполняю новый массив с преобразованием введенных данных
        );
      }
      let fioUpp = arrUpp.join(" "); //объединяю элементы
      fio1.textContent = `${fioUpp}`; //вывожу ФИО пользователя в чат
    }

    dateMess.textContent = `${dateCom}`; //вывожу дату и время создания комментария в чат
    message.textContent = `"${comment.value}"`
      .replace(/viagra/gi, "***")
      .replace(/xxx/gi, "***"); //вывожу комментарий пользователя в чат с применением спам фильтра

    /* checkBoxYes.addEventListener("change", () => {
    if (checkBoxYes.checked) {
      fio1.style.display = "blok";
    } else {
      fio1.style.display = "none";
    } */
  });
  /* totalString =
    totalString +
    `src="${randomFoto[numberFoto]}"` +
    `src ="${avatarYes}"` +
    `${fioUpp}` +
    `${dateCom}` +
    `"${comment.value}"`; */
});
