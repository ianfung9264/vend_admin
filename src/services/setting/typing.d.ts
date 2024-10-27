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
}
