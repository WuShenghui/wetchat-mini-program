/// <reference path="./assets/libs/typings/wx/lib.wx.app.d.ts" />

declare interface requestLock {
  status: boolean;
  request: Promise<any> | null,
  count: number,
}

declare interface IApp extends App.GetApp {
  logger
  state
  wxApi: wxApi

  requestId: number
  requestLock: requestLock

  dispatch(action: string, params?: any)
  commit(action: string, params?: any)
  getter(action: string, params?: any)
}

declare function getApp(): IApp;
