# <span id="i18n">语言本地化</span>

本项目已经接入本地化方案，使用 [`react-intl-universal`](https://github.com/alibaba/react-intl-universal)进行本地化，语言的切换和初始化已经在项目内配置完成，只需要引入该包即可在组件内直接使用

语言包配置分为`通用语言包`、`非通用语言包`和`手动配置语言包`

## 1. `通用语言包`

一般放置在`src/locale/`目录下，文件名一般以标准国际符号名称，文件内导出属性必须配置`locale`属性，一个例子：

```react
// src/locale/en.js
import { getSubLocale } from './_utils';
const context = require.context('../pages', true, /\/locale\/index\.js$/);

const locale = 'en';

export default {
    locale,//标准国际化
    ...getSubLocale(context, locale),//获取src/page/*/locale目录下index.js文件中导出的语言包，不过会放置在该文件命名的命名空间下
  //其他通用配置都可以放在这里
  "GREET":"HELLO",
};


//组件内使用通用语言包
import intl from 'react-intl-universal';
export default function App(){
  //intl已经在该项目入口初始化过了，这里可以直接使用
  console.log(intl.get("GREET")); // HELLO
  return <div>{intl.get("GREET")}</div>
}
```

## 2. `非通用语言包`

一般放置在`src/pages/**/locale`目录下，目录下`index.js`导出的语言包（定义了`namespace`【**必须**】）会自动注入`语言包库`中，在任意组件中便可使用。因此该目录下的其他语言包需要手动在`index.js`中收集下，例子如下：

```react
// src/pages/Home/locale/zh-CN.js
export default {
  "GREET":"你好",
}

// src/pages/Home/locale/en.js
export default {
  "GREET":"HELLO"
}

// src/pages/Home/locale/index.js
import zhCN from './zh-CN.js';
import en from './en.js';
export default {
  namespace:"HOME",
  'zh-cn':zhCN,
  en,
}

//任意组件中使用
//src/pages/HOME/index.js
import react from 'react';
import intl from 'react-intl-universal';

export default function Home(){
  // 中文环境下 -> 你好
  // 英语环境下 -> HELLO
  console.log(intl.get("HOME.GREET"));

  return <div>{intl.get("HOME.GREET")}</div>
}

//src/pages/other/index.js
import react from 'react';
import intl from 'react-intl-universal';

export default function OHTER(){
  // 中文环境下 -> 你好
  // 英语环境下 -> HELLO
  console.log(intl.get("HOME.GREET"));

  return <div>{intl.get("HOME.GREET")}</div>
}


```

> ⚠️注意：
>
> 1. `namespace`不用在语言包（如`en.js`）中指定，但是在`index.js`中必须指定且`唯一`，否则将不会自动注入`语言包库`
> 2. `index.js`中`key`规则：必须与规定的语言包名称匹配（`src/locale`目录下个语言包文件中定义的`locale`属性一致）
> 3. 只能在`src/pages`下的一级目录下建`locale`目录，以便语言包脚本注入

## 3. `手动配置语言包`

`手动配置语言包`是指在使用文件中使用`intl.load()`方法配置语言包，一个例子：

```react
// src/pages/Sale/index.js

import react from 'react';
import intl from 'reat-intl-universal';

export default function Sale(){
  intl.load({  // 建议放置在组件内部
    'zh-cn':{ GREET: "你好"},
    en:{ GREET:"HELLO"}
  });
  
   // 中文环境下 -> 你好
  // 英语环境下 -> HELLO
  console.log(intl.get("GREET"));
  
  return <div>{intl.get("GREET")}</div>
}
```

> 注意：
>
> 1. `intl.load()`建议放在组件内部，放置在外部不会生效

