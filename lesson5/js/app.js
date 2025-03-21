// // empty
// const obj1 = {};

// console.log(obj1);

// //  new object
// const fruits = new Object();
// console.log(fruits);
// console.log(typeof fruits);

// const mevalar = {
//   nomi: "Olma", // propertykey:value
//   narxi: 15000,
//   rangi: "qizil",
//   "shirin mevami": true,
//   2: "ikki",
//   2: "ikki str",
// };
// console.log(mevalar);
// console.log(mevalar.nomi);
// console.log(mevalar["nomi"]);

// console.log(mevalar["shirin mevami"]);
// mevalar.narxi = 10000;
// mevalar.madeIn = "UZB";
// delete mevalar[2];
// delete mevalar.rangi;
// delete mevalar[true];
// console.log(mevalar);

// console.log(box);
// console.log(box.color[1]);
// // console.log(box.size.height);
// console.log(box.size);
// if ("size" in box && "length" in box.size) {
//   console.log(box?.size?.length);
// }

// for (const i in box) {
//   console.log(i);
//   console.log(box[i]);
// }

// const box = {
//   material: "paper",
//   color: ["white", "green", "blue", true],
//   size: {
//     width: 20,
//     height: 20,
//     length: 10,
//   },
// };

// const quti = box;
// quti.material = "iron";
// console.log(box);
// console.log(box == quti);

// const box1 = Object.assign({ price: 100 }, box);
// box1.material = "wood";
// console.log(box1);
// console.log(box == box1);

// const box2 = {};
// Object.assign(box2, box);
// console.log(box == box2);
// // distracture -> yoyib yuborish
// const box3 = { ...box, ...quti, ...box2 };
// console.log(box3);

// const player = {
//   name: "Abbos",
//   number: 21,
//   age: 22,
//   boots: ["nike", "adidas"],
//   aboutPlayer2() {
//     const inner = () => {
//       console.log(`Ismi ${this.name}, yoshi: ${this.age}`);
//     }
//     return inner();
//   },
//   aboutPlayer() {
//     console.log(`Ismi ${this.name}, yoshi: ${this.age}`);
//   },
// };
// console.log(player);
// player.aboutPlayer();

// const new_player = { ...player };
// new_player.name = "Abduqodir";
// new_player.age = 21;

// new_player.aboutPlayer2();
// console.log(`Km bormi ${car["KM mavjudmi"]}`);
// console.log(`Mashina markasi ${car.marka}`);
// console.log(`Mashina modeli ${car.model}`);
// console.log(`Mashina tezligi ${car.speed}`);
// console.log(`Mashina rangi ${car.color}`);

// const car = {
//   KM: true,
//   marka: "BMW",
//   model: "BMW 1212",
//   speed: 200,
//   color: "black",
// };

// function prCar() {
//   for (const i in car) {
//     if ("km" in car) {
//       console.log("Km mavjud");
//     }
//   }
// }
// function prcar1() {
//   for (const i in car) {
//     if (i == Number(car[i] || car[i] == Number(car[i]))) {
//       continue;
//     } else {
//       console.log(car[i]);
//     }
//   }
// }
// prCar();

// let count = 0;
// let sum = 0;
// const xodimlar = {
//   salim: 21,
//   karim: 25,
//   nodir: 31,
//   qodir: 27,
// };
// for (const i in xodimlar) {
//   sum += xodimlar[i];
//   count++;
// }
// console.log(Math.floor(sum / count));

// const user = {
//   lastname: "komilov",
//   firstname: "zafar",
//   getfirstname() {
//     return this.firstname;
//   },
//   setfirstname(newname) {
//     this.firstname = newname;
//   },
//   set firstname(newname) {
//     this.first_name = newname;
//   },
// };

// console.log(user);
// user.firstname = "zafarsas";
// console.log(user.firstname);

const product = {
  nomi: "sumka",
  miqdori: 200,
  narxi: 50000,
  productINfo() {
    return product;
  },
  set Price(newPrice) {
    this.narxi = newPrice;
  },
};

const tovar = { ...product };
tovar.narxi = 120000;
console.log(tovar);
product.Price = 20000000;
console.log(product.productINfo());
console.log(product.Price);