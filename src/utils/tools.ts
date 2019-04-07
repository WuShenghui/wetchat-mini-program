interface IAnyObject {
  [key: string]: any;
}

const app = getApp();

export default {
  generateRequestID(): string {
    let num: number = 0;
    const ranDo = (m: number): number => {
      let num = '';
      for (let i = 0; i < m; i += 1) {
        const val = parseInt((Math.random() * 10).toString(), 10);
        if (i === 0 && val === 0) {
          i -= 1;
          continue;
        }
        num += val;
      }
      return parseInt(num, 10);
    };
    if (!app.requestId) {
      num = ranDo(8);
      app.requestId = num;
    } else {
      app.requestId += 1;
      num = app.requestId;
    }
    return num.toString();
  },

  /**
   * check if userInfo auth is true
   */
  async checkSpecificAuth(key: string): Promise<boolean> {
    try {
      const { authSetting } = await app.wxApi.getSetting();
      return authSetting.hasOwnProperty(key);
    } catch (error) {
      return false;
    }
  },

  /**
   * check if userInfo auth is true
   */
  async checkUserInfoAuth(): Promise<boolean> {
    return await this.checkSpecificAuth('scope.userInfo');
  }
};
