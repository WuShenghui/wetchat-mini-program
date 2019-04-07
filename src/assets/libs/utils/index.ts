import array from './array';
import date from './date';
import string from './string';
import uri from './uri';

export default {
  ...array,
  ...date,
  ...string,
  ...uri,

  /**
   * 深拷贝
   * @param obj 待拷贝对象
   * @example
   *  const obj = [{ size: 1, color: 'red' }, 1, 'a', true];
   *  const newObj = deepClone(obj);
   */
  deepClone(obj) {
    if (!obj) {
      return obj;
    }

    const clone: {} | [] = {};
    Object.keys(obj).forEach(
      key =>
        (clone[key] =
          typeof obj[key] === 'object' ? this.deepClone(obj[key]) : obj[key])
    );

    if (Array.isArray(obj)) {
      // tslint:disable-next-line:prefer-array-literal
      (clone as Array<any>).length = obj.length;
      // tslint:disable-next-line:prefer-array-literal
      return Array.from(clone as Array<any>);
    }

    return clone;
  },

  /**
   * 深度比较两个值是否相等
   * @param a 待比较值 a
   * @param b 待比较值 b
   */
  equals(a, b): boolean {
    if (a === b) {
      return true;
    }
    if (a instanceof Date && b instanceof Date) {
      return a.getTime() === b.getTime();
    }
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) {
      return a === b;
    }
    if (a === null || a === undefined || b === null || b === undefined) {
      return false;
    }
    if (a.prototype !== b.prototype) {
      return false;
    }

    const keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) {
      return false;
    }

    return keys.every(k => this.equals(a[k], b[k]));
  },

  /**
   * 防抖
   * @param fn 回调函数
   * @param ms 延迟时间（毫秒）
   * @param thisArg this 上下文
   * @example
   *  onInput = debounce(e => {
   *    this.inputVal = e.mp.detail.value;
   *  });
   */
  debounce(fn, ms = 500, thisArg?: any): Function {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(thisArg, args), ms);
    };
  }
};
