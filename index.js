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

//Решение практического задания

//Получаем переменную, куда пользователь вводит ФИО
const fio = document.querySelector(".service__input_fio");
/* console.log(fio); */

//получаем переменную, куда пользователь вводит ссылку на аватар
const avatar = document.querySelector("#avatar");
/* console.log(avatar);
console.log(avatar.value); */

//получаем переменную, куда пользователь вводит комментарий
const comment = document.querySelector(".service__input_comment");
/* console.log(comment); */

//Получаем переменную для кнопки
const button = document.querySelector(".service__input_button");
/* console.log(button); */

//Получаем переменную, куда будет попадать аватар пользователя
const chat = document.querySelector(".service__subtitle_foto");
/* console.log(chat); */

//Получаем переменную, куда будет попадать ФИО пользователя
const fio1 = document.querySelector(".service__subtitle_fio");

//Объявляю переменную с текущими датой и временем
const dateCom = new Date();

//Получаю переменную для отображения текущей даты и времени сообщения в чате
const dateMess = document.querySelector(".service__subtitle_date");

//Получаем переменную, куда будет попадать комментарий пользователя
const message = document.querySelector(".service__subtitle_comment");

//иВанОва лиДия петРоВна
//https://img3.akspic.ru/previews/0/8/5/2/7/172580/172580-bakenbardy-kot-koshachih-seryj_cvet-koshki_malogo_i_srednego_razmera-360x780.jpg
//купи viagRa xxx

//Функция для вывода данных пользователя в чат по нажатию на кнопку
button.addEventListener("click", () => {
  chat.innerHTML = `
  <img src=${avatar.value} style = "width: 50px" alt="аватар пользователя"/>`; //добавляем аватар пользователя в чат
  /* console.log(avatar.value); */
  const arr = fio.value.split(" "); //получаю массив полного имени
  const arrUpp = []; //создаю новый пустой массив
  for (let i = 0; i < arr.length; i++) {
    arrUpp.push(
      (arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase()) //заполняю новый массив с преобразованием введенных данных
    );
  }
  let fioUpp = arrUpp.join(" "); //объединяю элементы
  fio1.textContent = `${fioUpp}`; //вывожу ФИО пользователя в чат
  dateMess.textContent = `${dateCom}`; //вывожу дату и время создания комментария в чат
  message.textContent = `"${comment.value}"`
    .replace(/viagra/gi, "***")
    .replace(/xxx/gi, "***"); //вывожу комментарий пользователя в чат с применением спам фильтра
});
