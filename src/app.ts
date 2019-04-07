import { Conf } from '@/config';
import { createWxApi } from '@/assets/libs/wx/api';
import { createLogger } from '@/assets/libs/wx/log';
import { createStore } from '@/assets/libs/wx/store';
import store from '@/store';

App({
  requestLock: {
    status: false,
    request: null,
    count: 0
  },
  async onLaunch(options) {
    try {
      // mount wxApi in getApp().wxApi
      createWxApi.call(this, Conf.THEME);
      // mount store in getApp().$state
      createStore.call(this, store);
      // mount logger in getApp().logger
      createLogger.call(this, {
        wxAppId: Conf.APP.config.wxAppId,
        version: Conf.APP.version
      });
      // check network status
      await this.dispatch('detectNetwork');
    } catch (error) {
      console.log(error);
    }
  }
});
