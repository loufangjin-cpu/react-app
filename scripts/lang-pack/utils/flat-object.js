const flatObject = (curObj, parentKey = '', result = {}) => {
  Object.entries(curObj).forEach(([key, val]) => {
    let curKey = parentKey ? `${parentKey}.${key}` : key
    if(typeof val === 'object') {
      return flatObject(val, curKey , result)
    }
    result[curKey] = val
  })
  return result
}
module.exports = flatObject