/**获取各个子目录下locale */
const getSubLocale = (context, locale = 'zh-cn', nsPropName = 'namespace') => {
    const langs = context.keys().reduce((store, k) => {
        const lang = context(k).default || {};
        const key = lang[nsPropName];
        const patternKey = Object.keys(lang).find((it) => RegExp(locale.replace(/-|_/g, '[_-]'), 'i').test(it));
        const value = lang[patternKey] || {};
        if (key in store)
            console.error(
                `namespace[\`namespace\`] has the same key \`${key}\` in \`${k}\`,while it don't allow duplicates.`,
            );
        if (key) store[key] = value;
        return store;
    }, {});
    return langs;
};

export { getSubLocale };
