
import { MissingError } from '@libs/wx/utils';

export default class ApiLog {
  method: string = '';
  requestId: string = '';
  isError: boolean = false;
  requestStart: number = this.getTimeStamp();
  requestEnd: number = 0;
  timeCut: number = 0;
  data: any;
  response: any;
  desc: string = '';
  url: string = '';

  constructor({ method, requestId = '', data, url }:
    { method: string, url: string, requestId?: string, data?: any }) {

    this.method = method;
    this.url = url;
    this.requestId = requestId;
    this.data = data;
    this.requestStart = this.getTimeStamp();
  }

  loggerRespSuccess(resp: any) {
    this.logResp(resp);
  }

  loggerRespError(resp: any) {
    this.logResp(resp, true);
  }

  isValid(): boolean {
    if (!this.method || !this.url) {
      return false;
    }
    return true;
  }

  private logResp(resp: any, isError = false) {
    this.requestEnd = this.getTimeStamp();
    this.response = resp;
    this.isError = isError;
    this.timeCut = this.requestEnd - this.requestStart;
    const self = getApp() || this;
    self.logger.createApiLog(this);
  }

  private getTimeStamp(): number {
    return new Date().valueOf();
  }
}

// new api log
export function createApiLog({ url, method, ...other }: ApiLog) {
  if (!method || !url) {
    MissingError('method', 'url');
  }
  return new ApiLog({
    url,
    method,
    ...other
  });
}
