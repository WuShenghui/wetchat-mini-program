import utils from '@/utils';
import { HttpClient } from '@libs/wx/httpClient';

export class BaseService extends HttpClient {
  constructor(prefix: string, apis: IApi.module = {}) {
    super(prefix);

    for (const k in apis) {
      const { isJson = true, isFile = false, ...item } = apis[k];
      this[k] = (data: object = {}, params = {}, header = {}): Promise<any> => {
        const opt: wxHttpClient.requestOptions = utils.deepClone(item);
        opt.data = data;
        opt.header = Object.assign({}, opt.header, header);
        if (!isFile) {
          if (isJson) {
            return this.jsonRequest(opt, params);
          }
          return this.formRequest(opt, params);
        }
        return this.uploadFile(opt, params);
      };
    }
  }
}
