const jsBasicTests = [
  {
    question: "JavaScript nima?",
    option1: "Ma'lumotlar bazasi",
    option2: "Brauzer uchun dasturlash tili",
    option3: "Operatsion tizim",
    option4: "Grafik muharrir",
    ans: 2,
  },
  {
    question: "JavaScript fayllari qaysi kengaytmaga ega?",
    option1: ".txt",
    option2: ".css",
    option3: ".js",
    option4: ".java",
    ans: 3,
  },
  {
    question:
      "JavaScriptda o‘zgaruvchi yaratish uchun qaysi kalit so‘z ishlatiladi?",
    option1: "var, let, const",
    option2: "define",
    option3: "new",
    option4: "int",
    ans: 1,
  },
  {
    question: "`let x = 5;` bu qanday turdagi ifoda?",
    option1: "Deklaratsiya",
    option2: "Operator",
    option3: "Matn",
    option4: "Massiv",
    ans: 1,
  },
  {
    question: "`const` bilan e'lon qilingan o‘zgaruvchi:",
    option1: "Qayta qiymat olishi mumkin",
    option2: "Doimiy qiymatga ega bo‘ladi",
    option3: "Har doim null bo‘ladi",
    option4: "Xatolik beradi",
    ans: 2,
  },
  {
    question: "JavaScriptda `=` belgisi nima uchun ishlatiladi?",
    option1: "Solishtirish uchun",
    option2: "Qo‘shish uchun",
    option3: "Qiymat berish uchun",
    option4: "Kamaytirish uchun",
    ans: 3,
  },
  {
    question: "Qaysi biri to‘g‘ri qo‘shish operatoridir?",
    option1: "+",
    option2: "-",
    option3: "*",
    option4: "/",
    ans: 1,
  },
  {
    question:
      "Qaysi operator ikkita qiymatni taqqoslaydi va turini ham hisobga oladi?",
    option1: "==",
    option2: "=",
    option3: "===",
    option4: "!=",
    ans: 3,
  },
  {
    question: "`5 + '5'` natijasi nima bo‘ladi?",
    option1: "10",
    option2: "'55'",
    option3: "NaN",
    option4: "Xatolik",
    ans: 2,
  },
  {
    question: "Agar `let x;` deb yozilsa, `x`ning qiymati nima bo‘ladi?",
    option1: "null",
    option2: "0",
    option3: "undefined",
    option4: "false",
    ans: 3,
  },
  {
    question: "`typeof true` natijasi nima bo‘ladi?",
    option1: "boolean",
    option2: "true",
    option3: "string",
    option4: "number",
    ans: 1,
  },
  {
    question: "`typeof 123` natijasi nima bo‘ladi?",
    option1: "string",
    option2: "number",
    option3: "object",
    option4: "undefined",
    ans: 2,
  },
  {
    question: "Qaysi operator manfiy son yasaydi?",
    option1: "*",
    option2: "/",
    option3: "-",
    option4: "+",
    ans: 3,
  },
  {
    question: "`x += 2` ifodasining ma’nosi nima?",
    option1: "x ni 2 ga o‘zgartiradi",
    option2: "x ni 2 ga kamaytiradi",
    option3: "x ga 2 ni qo‘shadi",
    option4: "x ga 2 ni ajratadi",
    ans: 3,
  },
  {
    question: "`x++` nima qiladi?",
    option1: "x ni 1 ga kamaytiradi",
    option2: "x ni 1 ga oshiradi",
    option3: "x ni 2 ga oshiradi",
    option4: "x ni 0 ga o‘zgartiradi",
    ans: 2,
  },
  {
    question: "`x === y` va `x == y` orasidagi farq nima?",
    option1: "Farqi yo‘q",
    option2: "`===` qiymat va turini tekshiradi, `==` faqat qiymatni",
    option3: "`==` kuchliroq solishtiradi",
    option4: "`==` faqat raqamlarni solishtiradi",
    ans: 2,
  },
  {
    question: "Qaysi biri JavaScriptda matematik operator emas?",
    option1: "%",
    option2: "**",
    option3: "++",
    option4: "&&",
    ans: 4,
  },
  {
    question: "`true && false` ifodasi nima beradi?",
    option1: "true",
    option2: "false",
    option3: "undefined",
    option4: "error",
    ans: 2,
  },
  {
    question: "`true || false` ifodasi nima beradi?",
    option1: "false",
    option2: "true",
    option3: "null",
    option4: "NaN",
    ans: 2,
  },
  {
    question: "`!true` qiymati nima bo‘ladi?",
    option1: "true",
    option2: "false",
    option3: "NaN",
    option4: "undefined",
    ans: 2,
  },
];

export default jsBasicTests;
