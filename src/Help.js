export default Help = {
  checkPermission: (permissions = [''], permission) => {
    const result = permissions.find((element) => element === permission)
    return Boolean(result)
  },
  displayBoolean(boolean) {
    if (boolean === null) return 'NOT FOUND'
    return boolean ? 'YES' : 'NO'
  },
  displayDate: function (date_string) {
    if (!date_string) return 'NOT FOUND'
    let options = { year: 'numeric', month: 'long', day: 'numeric' }
    let date = new Date(date_string)
    return date.toLocaleDateString('en-us', options).toUpperCase()
  },
  displayDateTime(date_string) {
    if (!date_string) return 'NOT FOUND'
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    let date = new Date(date_string)
    return date.toLocaleTimeString('en-us', options)
  },
  displayNumber(number) {
    return number || 'NOT FOUND'
  },
  displayNumberWithComma(number) {
    return number?.toLocaleString() || 'NOT FOUND'
  },
  displayPercentage(value, total) {
    let x = (value / total) * 100
    return x ? `${x?.toFixed(2)}%` : 'NOT FOUND'
  },
  displayTags(array = []) {
    if (array?.length === 0) return 'NOT FOUND'
    return array.filter(Boolean).join(', ').toUpperCase()
  },
  displayText(text) {
    return text?.toUpperCase() || 'NOT FOUND'
  },
  findTableIndex: (limit, page, index) => {
    return limit * page + index - limit + 1
  }
}
