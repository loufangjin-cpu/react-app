/**
 * 防抖函数
 *
 * 说明：由于lodash.debounce未做事件持久化，针对React包装后的原生DOM无法做防抖，本方法可以作为替代
 * @param {Function} fn 防抖函数
 * @param {Number} delay 防抖间隔 默认300ms
 * @param {Boolean} isSynthicEvent 是否开启事件对象持久化
 * @returns
 */
export default function debounce(fn, delay = 300, isSynthicEvent) {
    let timer = null;
    return function (e, ...args) {
        if (isSynthicEvent) {
            if (typeof e === 'object' && typeof e.persist === 'function') {
                e.persist();
            }
        }
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn(e, ...args);
            timer = null;
        }, delay);
    };
}
