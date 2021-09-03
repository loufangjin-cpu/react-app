/**
 *生成唯一ID标识
 *
 * @export
 * @param length
 */
const getId = (length) => {
    return Number(
        Math.random()
            .toString()
            .substr(3, length) + Date.now(),
    ).toString(36);
};

export default getId;
