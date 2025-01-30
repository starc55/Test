const quizData = [
  // HTML savollari
  {
    question: "HTML hujjatining boshlanishi qaysi teg bilan boshlanadi?",
    option1: "<html>",
    option2: "<start>",
    option3: "<head>",
    option4: "<body>",
    ans: 1,
  },
  {
    question: "Qaysi teg HTML hujjatining oxirini belgilaydi?",
    option1: "<html>",
    option2: "<end>",
    option3: "<close>",
    option4: "<body>",
    ans: 1,
  },
  {
    question:
      "HTMLda qaysi atribut elementni identifikatsiya qilish uchun ishlatiladi?",
    option1: "id",
    option2: "class",
    option3: "name",
    option4: "data-id",
    ans: 1,
  },
  {
    question: "HTMLda matnni o‘zgartirish uchun qaysi teg ishlatiladi?",
    option1: "<div>",
    option2: "<text>",
    option3: "<mark>",
    option4: "<span>",
    ans: 4,
  },
  {
    question: "HTMLda video qo‘shish uchun qaysi teg ishlatiladi?",
    option1: "<video>",
    option2: "<media>",
    option3: "<embed>",
    option4: "<object>",
    ans: 1,
  },
  {
    question:
      "HTMLda havolani ochiladigan manzilini ko‘rsatadigan atribut qaysi?",
    option1: "src",
    option2: "href",
    option3: "target",
    option4: "link",
    ans: 2,
  },
  {
    question: "HTMLda matnni qalin qilish uchun qaysi teg ishlatiladi?",
    option1: "<i>",
    option2: "<b>",
    option3: "<strong>",
    option4: "<mark>",
    ans: 3,
  },
  {
    question:
      "HTMLda sarlavha darajasini belgilash uchun qaysi teg ishlatiladi?",
    option1: "<h1> - <h6>",
    option2: "<header>",
    option3: "<title>",
    option4: "<section>",
    ans: 1,
  },
  {
    question:
      "HTMLda rasmga alternativ matn qo‘shish uchun qaysi atribut ishlatiladi?",
    option1: "alt",
    option2: "title",
    option3: "src",
    option4: "data-alt",
    ans: 1,
  },
  {
    question:
      "HTMLda sarlavhani markazlashtirish uchun qanday atributdan foydalaniladi?",
    option1: "align",
    option2: "center",
    option3: "text-align",
    option4: "style",
    ans: 3,
  },
  {
    question: "HTMLda tarkibni qanday qilib jadvalga joylashtirasiz?",
    option1: "<table>",
    option2: "<grid>",
    option3: "<list>",
    option4: "<chart>",
    ans: 1,
  },
  {
    question: "HTMLda birinchi jadval satrini qanday belgilaysiz?",
    option1: "<thead>",
    option2: "<tr>",
    option3: "<td>",
    option4: "<th>",
    ans: 1,
  },
  {
    question: "HTMLda matnni ko‘paytirish uchun qaysi teg ishlatiladi?",
    option1: "<copy>",
    option2: "<p>",
    option3: "<repeat>",
    option4: "<span>",
    ans: 2,
  },
  {
    question: "HTMLda forma elementini yaratish uchun qaysi teg ishlatiladi?",
    option1: "<form>",
    option2: "<input>",
    option3: "<textarea>",
    option4: "<label>",
    ans: 1,
  },
  {
    question:
      "HTMLda havolani yangi oynada ochish uchun qanday atribut ishlatiladi?",
    option1: "target='_blank'",
    option2: "open='_new'",
    option3: "new='_blank'",
    option4: "target='_new'",
    ans: 1,
  },
  {
    question:
      "HTMLda javoblar ro‘yxatini belgilash uchun qaysi teg ishlatiladi?",
    option1: "<select>",
    option2: "<dropdown>",
    option3: "<option>",
    option4: "<input>",
    ans: 1,
  },
  {
    question: "HTMLda <head> tegi qanday maqsadni bajaradi?",
    option1: "Saytning strukturasi va meta ma'lumotlarini joylashtirish",
    option2: "Saytning vizual elementlarini ko'rsatish",
    option3: "Saytga skriptlarni qo‘shish",
    option4: "Saytning kontentini joylashtirish",
    ans: 1,
  },
  {
    question: "HTMLda link elementining atributi qaysi?",
    option1: "href",
    option2: "src",
    option3: "target",
    option4: "action",
    ans: 1,
  },
  {
    question: "HTMLda ko‘p rasmni birlashtirish uchun qaysi teg ishlatiladi?",
    option1: "<picture>",
    option2: "<img>",
    option3: "<video>",
    option4: "<combine>",
    ans: 1,
  },
  {
    question:
      "HTMLda forma elementlarini to‘g‘ri joylashtirish uchun qaysi teg ishlatiladi?",
    option1: "<input>",
    option2: "<label>",
    option3: "<fieldset>",
    option4: "<button>",
    ans: 3,
  },
  {
    question: "HTMLda forma atributi qaysi ma'lumotni ko‘rsatadi?",
    option1: "action",
    option2: "method",
    option3: "input-type",
    option4: "type",
    ans: 1,
  },
  {
    question:
      "HTMLda foydalanuvchi xatoliklarini ko‘rsatish uchun qaysi atribut ishlatiladi?",
    option1: "required",
    option2: "placeholder",
    option3: "error",
    option4: "validate",
    ans: 1,
  },
  {
    question:
      "HTML5da qaysi element formani yuborishda ma'lumotlarni JSON formatida yuborish uchun ishlatiladi?",
    option1: "<input>",
    option2: "<form>",
    option3: "<button>",
    option4: "<textarea>",
    ans: 2,
  },
  {
    question:
      "HTMLda qaysi atribut yordamida elementning xususiyatlarini dinamik ravishda o‘zgartirish mumkin?",
    option1: "id",
    option2: "class",
    option3: "style",
    option4: "data-",
    ans: 3,
  },
  {
    question:
      "HTML5da qaysi element video yoki audio fayllarni o‘ynatishda ishlatiladi?",
    option1: "<video>",
    option2: "<audio>",
    option3: "<media>",
    option4: "<file>",
    ans: 1,
  },

  // CSS savollari
  {
    question: "CSSda qaysi xususiyat matn rangini belgilaydi?",
    option1: "text-color",
    option2: "color",
    option3: "background-color",
    option4: "font-color",
    ans: 2,
  },
  {
    question: "CSSda qaysi xususiyat matnni markazlashtiradi?",
    option1: "align",
    option2: "center",
    option3: "text-align",
    option4: "justify",
    ans: 3,
  },
  {
    question: "CSSda fon rangi qanday belgilanadi?",
    option1: "background-color",
    option2: "background",
    option3: "color",
    option4: "bg-color",
    ans: 1,
  },
  {
    question: "CSSda matnni qalin qilish uchun qaysi xususiyat ishlatiladi?",
    option1: "font-weight",
    option2: "font-style",
    option3: "font-size",
    option4: "text-transform",
    ans: 1,
  },
  {
    question:
      "CSSda elementning joylashuvini o‘zgartirish uchun qanday xususiyat ishlatiladi?",
    option1: "position",
    option2: "align",
    option3: "display",
    option4: "float",
    ans: 1,
  },
  {
    question: "CSSda qanday birlik matnning o‘lchamini aniqlashda ishlatiladi?",
    option1: "pt",
    option2: "em",
    option3: "px",
    option4: "rem",
    ans: 4,
  },
  {
    question:
      "CSSda elementga chegara qo‘yish uchun qaysi xususiyat ishlatiladi?",
    option1: "border",
    option2: "outline",
    option3: "margin",
    option4: "padding",
    ans: 1,
  },
  {
    question: "CSSda qanday xususiyat yordamida elementni yashirish mumkin?",
    option1: "visibility: hidden;",
    option2: "display: none;",
    option3: "opacity: 0;",
    option4: "visibility: none;",
    ans: 2,
  },
  {
    question:
      "CSSda biror elementni biror joyga ko‘chirish uchun qaysi xususiyat ishlatiladi?",
    option1: "transform",
    option2: "translate",
    option3: "position",
    option4: "shift",
    ans: 1,
  },
  {
    question:
      "CSSda elementning bo‘shliq o‘lchamini aniqlash uchun qaysi xususiyat ishlatiladi?",
    option1: "padding",
    option2: "margin",
    option3: "border",
    option4: "gap",
    ans: 2,
  },
  {
    question:
      "CSSda satrni boshidan oxirigacha cho‘zish uchun qanday xususiyat ishlatiladi?",
    option1: "flex",
    option2: "max-width",
    option3: "height",
    option4: "width",
    ans: 1,
  },
  {
    question:
      "CSSda blokni bitta qatorga joylashtirish uchun qaysi xususiyatdan foydalaniladi?",
    option1: "display: inline-block;",
    option2: "display: block;",
    option3: "display: flex;",
    option4: "display: grid;",
    ans: 1,
  },
  {
    question:
      "CSSda elementga animatsiya berish uchun qaysi xususiyatdan foydalaniladi?",
    option1: "transition",
    option2: "animation",
    option3: "keyframes",
    option4: "motion",
    ans: 2,
  },
  {
    question: "CSSda shaffoflikni sozlash uchun qaysi xususiyat ishlatiladi?",
    option1: "opacity",
    option2: "visibility",
    option3: "color",
    option4: "transparent",
    ans: 1,
  },
  {
    question: "CSSda matnni katta qilish uchun qanday xususiyat ishlatiladi?",
    option1: "text-transform: uppercase;",
    option2: "font-size: large;",
    option3: "font-weight: bold;",
    option4: "font-style: italic;",
    ans: 1,
  },
  {
    question: "CSSda matnni kichik qilish uchun qanday xususiyat ishlatiladi?",
    option1: "font-size: small;",
    option2: "text-transform: lowercase;",
    option3: "font-weight: normal;",
    option4: "font-style: normal;",
    ans: 1,
  },
  {
    question:
      "CSSda har bir elementning yuqori, pastki, chap va o‘ng tomonlarini belgilash uchun qanday xususiyat ishlatiladi?",
    option1: "margin",
    option2: "padding",
    option3: "border",
    option4: "gap",
    ans: 2,
  },
  {
    question: "CSSda qaysi xususiyat orqali elementni o‘ngga siljitish mumkin?",
    option1: "float: right;",
    option2: "position: right;",
    option3: "text-align: right;",
    option4: "margin-left: auto;",
    ans: 1,
  },
  {
    question:
      "CSSda elementning ko‘rinish o‘lchamini aniqlash uchun qaysi xususiyat ishlatiladi?",
    option1: "width",
    option2: "height",
    option3: "size",
    option4: "dimension",
    ans: 1,
  },
  {
    question:
      "CSSda elementni markazlashtirish uchun qaysi xususiyatdan foydalaniladi?",
    option1: "text-align: center;",
    option2: "align-items: center;",
    option3: "display: flex;",
    option4: "margin: 0 auto;",
    ans: 2,
  },
  {
    question:
      "CSSda elementga shaffof fon rangi berish uchun qaysi xususiyatdan foydalaniladi?",
    option1: "background-color: transparent;",
    option2: "opacity: 0;",
    option3: "color: transparent;",
    option4: "visibility: hidden;",
    ans: 1,
  },
  {
    question:
      "CSSda hover holatida effekt qo‘shish uchun qaysi xususiyatdan foydalaniladi?",
    option1: ":hover",
    option2: ":active",
    option3: ":focus",
    option4: ":checked",
    ans: 1,
  },
  {
    question:
      "CSSda qaysi xususiyat orqali elementni yuqariga siljitish mumkin?",
    option1: "top",
    option2: "left",
    option3: "right",
    option4: "down",
    ans: 1,
  },
  {
    question:
      "CSSda qaysi xususiyat yordamida elementga gradient fon rangi berish mumkin?",
    option1: "background-color",
    option2: "background-image",
    option3: "border",
    option4: "box-shadow",
    ans: 2,
  },
  {
    question:
      "CSSda qaysi xususiyat yordamida elementni vertikal va gorizontal ravishda markazlashtirish mumkin?",
    option1: "text-align",
    option2: "align-items",
    option3: "margin: auto",
    option4: "position: absolute;",
    ans: 3,
  },
  {
    question:
      "CSSda qaysi xususiyat yordamida elementning matn rangini o'zgartirish mumkin?",
    option1: "font-size",
    option2: "color",
    option3: "background-color",
    option4: "line-height",
    ans: 2,
  },
  {
    question:
      "CSSda media query yordamida qaysi holatda ekran o‘lchami tekshiriladi?",
    option1: "font-size",
    option2: "device-width",
    option3: "width",
    option4: "height",
    ans: 2,
  },
  {
    question:
      "CSSda elementning farqlashni yanada soddalashtirish uchun qaysi usuldan foydalaniladi?",
    option1: "id",
    option2: "class",
    option3: "pseudo-class",
    option4: "attribute selectors",
    ans: 3,
  },
  {
    question:
      "CSSda hover holatida matnning rangini o'zgartirish uchun qanday sintaksis ishlatiladi?",
    option1: "a:hover { color: red; }",
    option2: "a:active { color: red; }",
    option3: "a:focus { color: red; }",
    option4: "a:visited { color: red; }",
    ans: 1,
  },
  {
    question:
      "CSSda bir nechta qoidalarni bitta selector orqali qanday qo'llash mumkin?",
    option1: "By separating rules with a comma",
    option2: "By using a semicolon",
    option3: "By writing each rule on a new line",
    option4: "By using an asterisk",
    ans: 1,
  },
];

export default quizData;
