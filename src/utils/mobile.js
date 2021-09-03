//  手机号脱敏
export const phoneDesensitization = (phoneStr) => {
    const verSplitIndex = phoneStr.indexOf('-');
    const len = phoneStr.length;
    let str = '';

    for (let i = 0; i < len; i++) {
        if (i >= verSplitIndex + 2 && i < len - 3) {
            str += '*';
        } else {
            str += phoneStr[i];
        }
    }
    return str;
};
