const XLSX = require('xlsx');
module.exports = function (content, fileName = 'intl-lang') {
 // 新增语言需要添加 表格里面的头部key的顺序保持一致
 const tableHeader = ['key', '中国', '英文', '越南语', '泰语', '印尼'];
 const rows = Object.entries(content).map(([k, v]) => {
  return [k, v, '', ''];
});
  rows.unshift(tableHeader)
  // 导出数据格式为二维数组，与导出的表格一一对应
  // [[ 'key', '中国'], ['AuditionClass.TABLE.columns.hello', '美好的世界']]
  const ws = XLSX.utils.aoa_to_sheet(rows);
  // 初始化
  let book = XLSX.utils.book_new();
  // 将数据添加到sheet1里面
  XLSX.utils.book_append_sheet(book, ws, 'sheet1');
  XLSX.writeFile(book, `./output/${fileName}.xlsx`);
}