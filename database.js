const suly = "kg";
const magassag = "cm";
const paciens1 = {
  nev: "Csilla",
  kor: 25,
  magassag: 168 + magassag,
  suly: 57 + suly,
  id: 1,
  insurance: true,
  email:'csilla@gmail.com',
  password: '2974u2j0iu0fhb01bg2f098ubg1f0=b12f',
  //Bensedin
};

const paciens2 = {
  nev: "Viola",
  kor: 40,
  magassag: 165 + magassag,
  suly: 65 + suly,
  id: 2,
  insurance: false,
  //null
};

const paciens3 = {
  nev: "Gyuri",
  kor: 48,
  magassag: 186 + magassag,
  suly: 97 + suly,
  id: 3,
  insurance: true,
  //Brufen
};

const paciens4 = {
  nev: "Viktor",
  kor: 30,
  magassag: 170 + magassag,
  suly: 102 + suly,
  id: 4,
  insurance: true,
  // Glucophage
};

const paciens5 = {
  nev: "Erzsébet",
  kor: 64,
  magassag: 154 + magassag,
  suly: 140 + suly,
  id: 5,
  insurance: false,
  //null
};

const paciens6 = {
  nev: "Péter",
  kor: 74,
  magassag: 162 + magassag,
  suly: 54 + suly,
  id: 6,
  insurance: true,
  //Diclophen
};

const paciens7 = {
  nev: "Szanella",
  kor: 21,
  magassag: 194 + magassag,
  suly: 69 + suly,
  id: 7,
  insurance: false,
  // Bensedin, Brufen
};

const paciens8 = {
  nev: "Krisztián",
  kor: 25,
  magassag: 183 + magassag,
  suly: 170 + suly,
  id: 8,
  insurance: true,
  //Glucophage, Brufen
};

const doktor1 = {
  nev: "Bertalan",
  paciensek: [paciens1, paciens2, paciens5, paciens6],
};

const doktor2 = {
  nev: "Jozsef",
  paciensek: [paciens3, paciens4, paciens7, paciens8],
};

const korhazBajmok = {
  id:'12w351q276',
  nev: "St' Bajmok",
  kep:"https://rtv.rs/sr_lat/vojvodina/backa/slike/2018/03/09/ambulanta-bajmok-jpg_660x330.jpg",
  doktorok: [doktor1, doktor2],
};



const Csilla = {
  nev: "Csilla",
  kor: 25,
  magassag: 178 + magassag,
  suly: 57 + suly,
  id: 1,
  insurance: true,
}; // Brufen, Bensedin

const Barnabas = {
  nev: "Barnabás",
  kor: 17,
  magassag: 195 + magassag,
  suly: 75 + suly,
  id: 2,
  insurance: false,
}; // Brufen

const Zsigmond = {
  nev: "Zsigmond",
  kor: 61,
  magassag: 180 + magassag,
  suly: 87 + suly,
  id: 3,
  insurance: true,
}; // Brufen, Diclophen

const Eleonora = {
  nev: "Eleonóra",
  kor: 31,
  magassag: 120 + magassag,
  suly: 50 + suly,
  id: 4,
  insurance: true,
}; // null

const Nintendo = {
  nev: "Nintendó",
  kor: 30,
  magassag: 179 + magassag,
  suly: 107 + suly,
  id: 5,
  insurance: true,
}; // Brufen, Glucophage

const Zsofia = {
  nev: "Zsófia",
  kor: 8,
  magassag: 108 + magassag,
  suly: 29 + suly,
  id: 6,
  insurance: true,
}; // Bensedin

const Szanella = {
  nev: "Szanella",
  kor: 90,
  magassag: 134 + magassag,
  suly: 47 + suly,
  id: 7,
  insurance: false,
}; // null

const Szamanta = {
  nev: "Szamanta",
  kor: 25,
  magassag: 158 + magassag,
  suly: 56 + suly,
  id: 8,
  insurance: true,
}; // Bensedin

const Janos = {
  nev: "János",
  kor: 37,
  magassag: 161 + magassag,
  suly: 57 + suly,
  id: 9,
  insurance: true,
}; // null

const Illes = {
  nev: "Illés",
  kor: 75,
  magassag: 218 + magassag,
  suly: 130 + suly,
  id: 10,
  insurance: false,
}; // Brufen

const drBertalan = {
  nev: "Bertalan",
  paciensek: [Csilla, Nintendo, Illes, Barnabas],
};

const drAnna = {
  nev: "Anna",
  paciensek: [Zsigmond, Eleonora, Janos],
};

const drBubo = {
  nev: "Bubó",
  paciensek: [Szamanta, Szanella, Zsofia],
};

const korhazCsantaver = {
  id:'827b38a712',
  nev: "St' Csantavér",
  kep:"https://pannonrtv.com/sites/default/files/2020-06/2020-06-01-csantaver-egeszseghaz1.jpg",
  doktorok: [drAnna, drBubo, drBertalan],
};

const korhazak = [
  korhazCsantaver,
  korhazBajmok 
];

//m
module.exports = korhazak;
