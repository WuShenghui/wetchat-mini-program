import route from '@config/route';

const app = getApp();

Page({
  data: {
    motto: '',
    src: '/assets/static/images/avatar.jpeg',
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
});
