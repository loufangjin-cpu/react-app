import intl from 'react-intl-universal';

export const LEADS_AFTER_STATUS_LIST = [
  {
      value: 0,
      name: intl.get('TABLE.columns.hello').d('你好默认'),
  },
  {
      value: 1,
      name: intl.get('TABLE.columns.name').d('你好世界'),
  }
]

export const columns = [
  {
    title: intl.get('TABLE.columns.hello').d('你好默认'),
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: intl.get('TABLE.columns.name').d('你好世界'),
    key: 'name',
    dataIndex: 'name',
  },
];
export const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
  },
  {
    key: '2',
    name: '胡彦祖',
  },
];