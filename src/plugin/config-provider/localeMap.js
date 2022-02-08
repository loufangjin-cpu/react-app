export default {
    antd: {
        'zh-cn': () => import('antd/es/locale/zh_CN'), //中文简体
        en: () => import('antd/es/locale/en_US'), //英语
        ja: () => import('antd/es/locale/ja_JP'), //日语
        'zh-hk': () => import('antd/es/locale/zh_TW'), //中文繁体
        vi: () => import('antd/es/locale/vi_VN'), //越南语
        ms: () => import('antd/es/locale/ms_MY'), //马来西亚语
        th: () => import('antd/es/locale/th_TH'), //泰语
        id: () => import('antd/es/locale/id_ID'), //印尼语
    },
    moment: {
        'zh-cn': () => import('moment/locale/zh-cn'),
        en: () => import('moment/locale/en-gb'),
        ja: () => import('moment/locale/ja'),
        'zh-hk': () => import('moment/locale/zh-hk'),
        vi: () => import('moment/locale/vi'),
        ms: () => import('moment/locale/ms'),
        th: () => import('moment/locale/th'),
        id: () => import('moment/locale/id'),
    },
};
