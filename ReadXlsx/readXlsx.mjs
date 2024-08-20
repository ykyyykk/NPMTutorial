// https://www.youtube.com/watch?v=KaAqvNXICxo
// NPM要重新Init從別的專案移過來的
// package.json 路徑要設定正確
// 記得先安裝套件 npm Init
// 在package.json 設定路徑
console.log(1111);

import readXlsxFile from "read-excel-file/node";

const schema = {
  id: {
    prop: "id",
    data: Number,
  },
  title: {
    prop: "title",
    data: String,
  },
  year: {
    prop: "year",
    data: String,
  },
};

// schema 在資料前面增加 資料名稱
// sheet 工作表選擇
// readXlsxFile("imdb.xlsx", { schema: schema, sheet: "工作表1" }).then(
//   (rows) => {
//     console.log(rows);
//   }
// );
