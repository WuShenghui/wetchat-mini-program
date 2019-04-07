import utils from '@/utils';

Page({
  data: {
    logs: [] as string[],
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: number) => {
        return utils.formatDateTime(log);
      })
    });

    console.log('this.data.logs', this.data.logs);
  },
});
