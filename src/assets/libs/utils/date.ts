export default {
  /**
   * 数字格式化（个位数前而补零）
   * @param n 待格式化数字
   * @example
   *  formatNumber(5);
   */
  formatNumber(n: number): string {
    const str = n.toString();
    return str[1] ? str : `0${str}`;
  },

  /**
   * 时间格式化（yyyy-MM-dd HH:mm）
   * @param timestamp 待格式化时间戳
   * @example
   *  formatTime(1546426560000);
   */
  formatDateTime(timestamp: number): string {
    const { year, month, day, hour, minute } = this.getDateTimeInfo(timestamp);

    const t1 = [year, month, day].map(this.formatNumber).join('-');
    const t2 = [hour, minute].map(this.formatNumber).join(':');

    return `${t1} ${t2}`;
  },

  /**
   * 时间格式化（yyyy/MM/dd）
   * @param timestamp 待格式化时间戳
   * @example
   *  formatDate(1546426560000);
   */
  formatDate(timestamp: number): string {
    const { year, month, day } = this.getDateTimeInfo(timestamp);

    return [year, month, day].map(this.formatNumber).join('/');
  },

  /**
   * 时间间隔（当大于 3 天时，直接返回 yyyy/MM/dd）
   * @param timestamp 待计算时间戳
   */
  timeAgo(timestamp: number = new Date().getTime()): string {
    const { day, hour, minute, second, millisecond } = this.timeDuration(
      timestamp
    );

    if (day > 3) {
      return this.formatDate(timestamp);
    }

    if (day > 0 && day <= 3) {
      return `${day} 天前`;
    }

    if (day <= 0 && hour > 0) {
      return `${hour} 小时前`;
    }

    if (hour <= 0 && minute > 0) {
      return `${minute} 分钟前`;
    }

    if (second < 60 && second > 0) {
      return `${second} 秒前`;
    }

    if (millisecond > 0) {
      return '刚刚';
    }

    return '';
  },

  /**
   * 获取日期时间内容
   * @param timestamp 时间戳
   */
  getDateTimeInfo(timestamp: number) {
    const date = new Date(+timestamp);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return { year, month, day, hour, minute, second };
  },

  /**
   * 计算给定时间与当前时间的间隔
   * @param timestamp 时间戳
   */
  timeDuration(timestamp) {
    const now = new Date().getTime();
    let ms = now - timestamp;

    if (ms < 0) {
      ms = -ms;
    }

    const time = [
      Math.floor(ms / 86400000),
      Math.floor(ms / 3600000) % 24,
      Math.floor(ms / 60000) % 60,
      Math.floor(ms / 1000) % 60,
      Math.floor(ms) % 1000
    ].map(c => {
      return c.toString().length === 1 ? `0${c}` : c;
    });
    return {
      day: time[0],
      hour: time[1],
      minute: time[2],
      second: time[3],
      millisecond: time[4]
    };
  }
};
