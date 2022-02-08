import React from 'react'
import { DatePicker, Space, Select, Table } from 'antd';
import intl from 'react-intl-universal';
import {LEADS_AFTER_STATUS_LIST, dataSource, columns} from './const'
const { Option } = Select;

const About = () => {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  const handleChangeList = (value) => {
    console.log('value', value)
  }
  return <div>
    <div className="element">
      {intl.get('TABLE.columns.hello').d('默认值')}
    </div>
    <Space direction="vertical">
    <DatePicker onChange={onChange} />
    <DatePicker onChange={onChange} picker="week" />
    <DatePicker onChange={onChange} picker="month" />
    <DatePicker onChange={onChange} picker="quarter" />
    <DatePicker onChange={onChange} picker="year" />
    <Select defaultValue={0} style={{ width: 120 }} onChange={handleChangeList}>
      {
        LEADS_AFTER_STATUS_LIST.map(item =>
          <Option value={item.value} key={`item${item.value}`}>
            {item.name}
          </Option>)
      }
    </Select>
  </Space>
  <Table dataSource={dataSource} columns={columns} />;
  </div>
}

export default About
