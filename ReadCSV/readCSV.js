const fs = require("fs");
const { parse } = require("csv"); // 確保正確解構導入 parse 函數

var rowIndex = 0;
// 讀取 CSV 檔案
fs.createReadStream("DailyCost.csv")
  // 還是會顯示空的
  // .pipe(parse({ delimiter: ",", skip_empty_lines: true }))
  .pipe(parse({ delimiter: "," }))
  .on("data", (row) => LogRow(row))
  .on("end", () => {
    console.log("CSV file successfully processed");
  })
  .on("error", (err) => {
    console.error(err); // 處理錯誤
  });

function LogRow(row) {
  //     console.log(row); // 在這裡處理每一列數據
  //直接做條件判斷反而抓不到資料
  //     if (row.length > 0 && row.length <= 31) {
  //       console.log(row);
  //     }
  // 取得每一行不是空的row
  rowIndex += 1;
  const filteredRow = row
    .map((cell) => {
      //過濾掉問號
      let cleanedCell = cell.replace(/\?/g, "");
      //過濾掉空格
      cleanedCell = cleanedCell.replace(/\s/g, "");
      return cleanedCell;
    })
    .filter((cell) => cell !== "");

  if (filteredRow.length > 0 && filteredRow.length <= 31) {
    console.log(`Row ${rowIndex}:`, filteredRow);
  }
}

// 1 2024/6/1
// 2 早餐
// 3 午餐
// 4 晚餐
// 5 特殊
// 6 工作時數地點
// 7 當日總和
