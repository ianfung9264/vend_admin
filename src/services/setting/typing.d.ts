declare namespace API_Setting {
  interface CreateFaq {
    question: string;
    answer: string;
  }
  interface UpdateFaq {
    _id: string;
    question?: string;
    answer?: string;
    isDisplay?: boolean;
  }
  interface HiddenFaq {
    id: string;
  }
  interface CreatePrivacyPolicy {
    context: string;
  }
  interface UpdatePrivacyPolicy {
    context: string;
    part: number;
  }
  interface UpdateTermsCondition {
    context: string;
    part: number;
  }
  interface CreateTermsCondition {
    context: string;
  }
}
