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
