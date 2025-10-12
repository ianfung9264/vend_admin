declare namespace API_EVENT {
  export interface Location {
    country: string; // 国家
    state: string; // 州/省
    city: string; // 城市
    address: string; // 地址
    zip: string; // 邮政编码
  }

  // 定义地理位置类型
  export interface GeoLocation {
    type: "Point"; // GeoJSON 类型
    coordinates: [number, number]; // [lng, lat]
  }

  // 定义事件日程类型
  export interface EventSchedule {
    start_time: Date; // 事件开始时间
    end_time: Date; // 事件结束时间
  }

  // 定义票种类型
  export interface TicketType {
    stall_type: string; // 票种类型
    price: number; // 票种价格
    length: number; // 长度
    width: number; // 宽度
    height: number; // 高度
    quantity: number; // 数量
    questions?: string[]; // 可选问题
    description?: string; // 可选描述
  }

  // 定义附加项类型
  export interface AddOn {
    add_on_type: string; // 附加项类型
    price: number; // 附加项价格
    quantity: number; // 附加项数量
    description?: string; // 可选描述
  }

  // 定义 FAQ 类型
  export interface FAQ {
    question: string; // 问题
    answer: string; // 答案
  }

  // 定义异常原因类型
  export interface AbnormalReason {
    type: string; // 异常类型
    reason: string; // 原因
    abnormal_start_time: Date; // 异常开始时间
    abnormal_end_time?: Date; // 可选异常结束时间
  }

  // 定义事件类型
  export interface Event {
    _id: string; // 事件的唯一标识符
    liked_count: number; // 被喜欢的次数
    location: Location; // 事件位置
    geo_location: GeoLocation; // 事件的地理位置信息
    creator: string; // 创建者的唯一标识符
    participants: string[]; // 参与者的唯一标识符数组
    type: string; // 事件类型
    schedule: EventSchedule[]; // 事件日程
    price: number; // 事件价格
    image_filename: string[]; // 事件图片文件名数组
    name: string; // 事件名称
    category: string[]; // 类别的唯一标识符数组
    description?: string; // 事件描述
    tags?: string[]; // 标签数组
    invoice_effective_duration: number; // Effective invoice payment duration in days
    application_deadline: Date; // 申请截止日期
    set_up_detail: string; // 设置详情
    additional_detail?: string; // 可选附加详情
    full_refund_policy: string; // 全额退款政策
    half_refund_policy: string; // 半额退款政策
    no_refund_policy: string; // 不退款政策
    ticket_types: TicketType[]; // 票种信息
    add_ons?: AddOn[]; // 可选附加项
    faq?: FAQ[]; // 可选 FAQ
    terms_n_conditions: string; // 条款和条件
    blocked_reason?: AbnormalReason[]; // 可选阻止原因
    status: number; // 事件状态
    ratings: any[]; // 评分数组
    stripe_fee_belong: string; // Stripe 费用归属
  }
}
