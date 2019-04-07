declare namespace wxLog {

  // rid type
  const enum LogType {
    SLOW_API = 'slow_api',
    ERROR_API = 'error_api',
    SCRIPT_ERROR = 'js_error',
    PAGE_ERROR = 'page_error',
    DEVICE_ERROR = 'device_error'
  }

  // cat type
  const enum ErrorType {
    JS_ERROR = 'term_report',
    API_ERROR = 'term_report',
    NETWORK_ERROR = 'term_report'
  }

  // device info
  interface IAppInfo {
    version: string; // app version
    wxAppId: string; // wx app id
  }

  // log module options
  export interface ILoggerOptions extends IAppInfo {
    getLocation?: boolean; // get user location
    statShareApp?: boolean; // capture shareApp
    statApiSpeed?: boolean;
    apiMaxRequestTime?: number;
  }

  // report item
  interface IReportData extends IAppInfo {
    rid: LogType;
    cat: ErrorType;
    data: ApiLog | string;
    deviceInfo: wx.GetSystemInfoSyncResult;
  }
}
