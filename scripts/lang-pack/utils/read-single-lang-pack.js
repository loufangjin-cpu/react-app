const XLSX = require('xlsx');
const _ = require('lodash');

const readIntlLangExcel = () => {
    const workbook = XLSX.readFile('./output/intl-lang1.xlsx');
    const sheetNames = workbook.SheetNames;
    const worksheet = workbook.Sheets[sheetNames[0]];
    console.log('worksheet', worksheet)
    return XLSX.utils.sheet_to_json(worksheet);
};

const removeLinebreak = (str) => {
    if (!str) return str;

    return str.replace(/[\r\n]/g, '');
};

const readSingleLangPack = function (lang) {
    let result = {};
    const sheetObj = readIntlLangExcel();
    console.log('sheetObj' , sheetObj)
    sheetObj.forEach((item) => {
        const keylist = item.key.split('.');

        let obj = {};
        for (let i = keylist.length - 1; i >= 0; i--) {
            // 首次直接赋值，之后取下级对象当值
            if (i === keylist.length - 1) {
                obj[keylist[i]] = removeLinebreak(item[lang]);
            } else {
                const newobj = Object.assign({}, obj);
                obj = {};
                obj[keylist[i]] = newobj;
            }
        }
        result = _.merge(result, obj);
    });
    return result;
};

module.exports = {
    readSingleLangPack,
    readIntlLangExcel,
};
