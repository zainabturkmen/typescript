const books = ["1284", "Brave New World", "Frhrenheight 451"];

let foundbooks: string | undefined;

for (let book of books) {
  if (book === "1284") {
    foundbooks = book;
    foundbooks.length;
    break;
  }
}

let disscount: number | string = 20;
disscount = "20"
// disscount = true

let orderStatues: "processing" | "shippping" | "delivered" = "processing"

orderStatues = "delivered"
// orderStatues = "value"