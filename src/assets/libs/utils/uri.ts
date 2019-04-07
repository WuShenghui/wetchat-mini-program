export default {
  /**
   * 返回 url
   * @param {string} url
   * @param {object} data 描述 url 需要的 query
   */
  getUrlQuery(url: string, data: object = {}) {
    const hasQuery = data instanceof Object && Object.keys(data).length;
    return {
      url: hasQuery ? `${url}?${this.objectToUrlQuery(data)}` : url
    };
  },

  objectToUrlQuery(params: object = {}): string {
    if (Object.keys(params).length) {
      return Object.keys(params).map(key =>
        `${encodeURIComponent(key)}=${encodeURIComponent((params as any)[key])}`
      ).join('&');
    }
    return '';
  },
};
