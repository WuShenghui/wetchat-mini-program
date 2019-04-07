import route from '@Config/route';

const app = getApp();

Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  bindViewTap() {
    app.wxApi.navigateTo(route.LOGS).then(res => {
      console.log(res);
    });
  },

  async onLoad() {
    let logs: number[] = [];
    try {
      logs = await app.wxApi.getStorage('logs');
    } catch (error) {
      console.log(error);
    } finally {
      logs.unshift(Date.now());
      app.wxApi.setStorage('logs', logs);
    }
  },

  getUserInfo(e: any) {
    console.log(e);
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  },
});
