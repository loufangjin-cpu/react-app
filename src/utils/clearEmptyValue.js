/**
 *处理antd等库表单组件清空后仍有空值的情况
 *
 * @export
 * @param {object|array} values
 * @returns
 */
export default function clearEmptyValue(values) {
    const emptyValueArr = [undefined, null, '', NaN];
    if (Array.isArray(values)) {
        return values.filter((val) => emptyValueArr.every((it) => !Object.is(it, val)));
    } else if (typeof values !== 'object') {
        return values;
    }
    const result = {};
    Object.keys(values).forEach((k) => {
        if (emptyValueArr.every((it) => !Object.is(it, values[k]))) {
            result[k] = values[k];
        }
    });
    return result;
}
