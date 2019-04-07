export default {
  /**
   * 计算字符串（中英文）字节长度，中文字符两个字节，英文1个字节
   * @param str 输入字符串
   * @see http://jsperf.com/count-string-length
   */
  strLen(str: string) {
    let count = 0;
    for (let i = 0, len = str.length; i < len; i += 1) {
      count += str.charCodeAt(i) < 256 ? 1 : 2;
    }
    return count;
  },

  /**
   * 字符串超出指定长度部分使用省略号代替
   * @param str 字符串
   * @param num 显示字符串长度（不含省略号），默认 20 个字符
   */
  truncateString(str: string, num: number = 20): string {
    return str.length > num
      ? `${str.slice(0, num > 3 ? num - 3 : num)} ...`
      : str;
  },

  /**
   * 数据掩码
   * @param str 待处理数据
   * @param type 掩码类型，默认为 phone
   */
  dataMask(str: string, type: string = 'phone') {
    let result;
    switch (type) {
      case 'phone':
        result = `${str.substr(0, 3)}****${str.substr(7)}`;
        break;
      default:
        break;
    }
    return result;
  }
};
