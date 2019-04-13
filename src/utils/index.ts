import utils from '@libs/utils';
import tools from './tools';

export default {
    ...utils,
    ...tools,

    validateMobile(num: string): boolean {
        const regexp = /^1[3|4|5|6|7|8|9]\d{9}$/;
        return regexp.test(num);
    },

    /**
     * 获取用户是否授权保存到相册 wx.saveImageToPhotosAlbum, wx.saveVideoToPhotosAlbum
     */
    async getUserwritePhotosAlbum() {
        return new Promise((resolve) => {
            wx.getSetting({
                complete: (res: any) => {
                    console.log(res, '-----auth-------wx.getSetting------');
                    let result = false;
                    if (res && res.authSetting && res.authSetting['scope.writePhotosAlbum']) {
                        result = true;
                    }
                    resolve(result);
                }
            });
        });
    }
 };
