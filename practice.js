//////////Решение практического задания

//Получаем элементы со страницы
const fio = document.querySelector(".service__input_fio"); //Поле ввода ФИО
const avatar = document.querySelector("#avatar"); //Поле ввода ссылки на аватар
const comment = document.querySelector(".service__input_comment"); //Поле ввода комментария
const button = document.querySelector(".service__input_button"); //Кнопка отправки комментария
const chat = document.querySelector(".service__subtitle_foto"); //Блок для отображения аватара пользователя
const message = document.querySelector(".service__subtitle_comment"); //Блок для отображения комментариев

//Создаем переменные и получаем элементы
let avatarYes = avatar.value; //Переменная для ссылки на аватар пользователя
let fioV = fio.value; //Переменная для ФИО
const fio1 = document.querySelector(".service__subtitle_fio"); //Блок для отображения ФИО пользователя
const dateMess = document.querySelector(".service__subtitle_date"); //Блок для отображения даты сообщения

//Получаем элементы для работы с чекбоксами
const checkBoxYes = document.querySelector("#checkbox-yes"); //Чекбокс "Да"
const checkBoxNo = document.querySelector("#checkbox-no"); //Чекбокс "Нет"

//Массив со ссылками на фото
let randomFoto = [
  "assets/img/anime.jpg",
  "assets/img/brunette.jpg",
  "assets/img/cat.jpg",
  "assets/img/girl_with_owl.jpg",
  "assets/img/smile.jpg",
  "assets/img/raccoon_rocket.jpg",
];

//Добавляем обработчик события для чекбокса "Да"
checkBoxYes.addEventListener("change", () => {
  if (checkBoxYes.checked) {
    fio.style.display = "block"; //Отображаем поле ввода ФИО
  }
});

//Добавляем обработчик события для чекбокса "Нет"
checkBoxNo.addEventListener("change", () => {
  if (checkBoxNo.checked) {
    fio.disabled = true; //Блокируем поле ввода ФИО
  } else {
    fio.style.display = "block"; //Отображаем поле ввода ФИО
  }
});

//Добавляем обработчик события на кнопку отправки комментария
button.addEventListener("click", () => {
  let numberFoto = Math.floor(Math.random() * randomFoto.length); //Генерируем случайный индекс фото в массиве
  let avatarSrc = avatar.value ? avatar.value : randomFoto[numberFoto]; //Проверяем, введена ли ссылка на аватар и выбираем соответствующий путь
  //Добавляем комментарий в блок для отображения комментариев
  chat.innerHTML += `
    <div class="service__subtitel_item">
        <img class="service__img" src="${avatarSrc}" alt="Аватар пользователя">
        <div class="service__subtitle_info">
            <p class="service__subtitle_fio">${fio.value || "username"}</p>
            <p class="service__subtitle_date">${new Date()}</p>
        </div>
        <p class="service__subtitle_comment">${comment.value.replace(
          /viagra|xxx/gi,
          "***"
        )}</p>
    </div>`;
  //Очищаем поля
  fio.value = "";
  avatar.value = "";
  comment.value = "";
});

//иВанОва лиДия петРоВна
//https://img3.akspic.ru/previews/0/8/5/2/7/172580/172580-bakenbardy-kot-koshachih-seryj_cvet-koshki_malogo_i_srednego_razmera-360x780.jpg
//купи viagRa xxx
