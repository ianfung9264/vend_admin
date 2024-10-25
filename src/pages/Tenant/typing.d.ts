declare namespace Page_tenant {
  interface mainTable {
    be_followed_count: number; // 被关注的数量
    email: string; // 电子邮件
    eventCount: number; // 事件数量
    _id: string; // 唯一标识符
    firstname: string; // 名字
    lastname: string; // 姓氏
    blurb: string; // 简介
    joined_events_count: number; // 加入事件的数量
    otpStatus: number; // 账户状态
  }
}
