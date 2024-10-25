declare namespace Page_org {
  interface mainTable {
    advanced_status: number;
    be_followed_count: number;
    business_address: BusinessAddress;
    business_full_name: string;
    business_name: string;
    business_url: string;
    email: string;
    eventCount: number;
    facebook_url: string;
    ins_url: string;
    like_event_list: any[]; // 可根据具体数据结构定义
    wallet: number;
    x_url: string;
    _id: string;
  }
}
