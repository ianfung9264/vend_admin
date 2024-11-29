import { request } from "@umijs/max";

export const _getBannerContext =
  async (): Promise<API.DefaultObjectResponse> => {
    const result = await request(`/api/v1/global/public/cms/9527`, {
      method: "get",
    });
    return {
      data: result,
      status: true,
      code: 200,
    };
  };
export const _getBannerVideo = async (): Promise<API.DefaultObjectResponse> => {
  const result = await request(`/api/v1/global/public/cms/banner/video`, {
    method: "get",
  });
  return {
    data: result,
    status: true,
    code: 200,
  };
};
export const _updateBannerContext = async (data: {
  children: {
    title: string;
    subtitle: string;
    body: string;
  }[];
}): Promise<API.DefaultObjectResponse> => {
  const result = await request(`/api/v1/admin/private/cms/banner`, {
    method: "put",
    data: data,
  });
  return {
    data: result,
    status: true,
    code: 200,
  };
};

export const _updateBannerVideo = async (data: {
  youtube_url: File;
}): Promise<API.DefaultObjectResponse> => {
  const formData = new FormData();
  formData.append("file", data.youtube_url);
  const result = await request(`/api/v1/admin/private/cms/banner/video`, {
    method: "put",
    data: formData,
    requestType: "form", // 指定请求类型为表单
    headers: {
      "Content-Type": "multipart/form-data", // 设置正确的 Content-Type
    },
  });
  return {
    data: result,
    status: true,
    code: 200,
  };
};

export const _getLoginImage = async (): Promise<API.DefaultObjectResponse> => {
  const result = await request(`/api/v1/global/public/cms/0678`, {
    method: "get",
  });
  return {
    data: result,
    status: true,
    code: 200,
  };
};
export const _updateLoginImage = async (data: {
  file: File;
}): Promise<API.DefaultObjectResponse> => {
  const formData = new FormData();
  formData.append("file", data.file);
  formData.append("session", "0678");
  const result = await request(`/api/v1/admin/private/cms/single-image`, {
    method: "put",
    data: formData,
    requestType: "form", // 指定请求类型为表单
    headers: {
      "Content-Type": "multipart/form-data", // 设置正确的 Content-Type
    },
  });
  return {
    data: result,
    status: true,
    code: 200,
  };
};

export const _getSignupImage = async (): Promise<API.DefaultObjectResponse> => {
  const result = await request(`/api/v1/global/public/cms/0595`, {
    method: "get",
  });
  return {
    data: result,
    status: true,
    code: 200,
  };
};
export const _updateSignupImage = async (data: {
  file: File;
}): Promise<API.DefaultObjectResponse> => {
  const formData = new FormData();
  formData.append("file", data.file);
  formData.append("session", "0595");
  const result = await request(`/api/v1/admin/private/cms/single-image`, {
    method: "put",
    data: formData,
    requestType: "form", // 指定请求类型为表单
    headers: {
      "Content-Type": "multipart/form-data", // 设置正确的 Content-Type
    },
  });
  return {
    data: result,
    status: true,
    code: 200,
  };
};
export const _getCategory = async (): Promise<API.DefaultObjectResponse> => {
  return await request(`/api/v1/admin/private/category`, {
    method: "get",
  });
};

export const _updateCategory = async (values: {
  _id: string;
  name: string;
  isDisplay: boolean;
}): Promise<API.DefaultObjectResponse> => {
  return await request(`/api/v1/admin/private/category`, {
    method: "put",
    data: { ...values, isDisplay: JSON.parse(values.isDisplay as any) },
  });
};
export const _createCategory = async (values: {
  name: string;
}): Promise<API.DefaultObjectResponse> => {
  return await request(`/api/v1/admin/private/category`, {
    method: "post",
    params: { name: values.name },
  });
};

export const _getPrivacyPolicy =
  async (): Promise<API.DefaultObjectResponse> => {
    return await request(`/api/v1/admin/private/privacy`, {
      method: "get",
    });
  };

export const _postPrivacyPolicy = async (values: {
  context: string;
}): Promise<API.DefaultObjectResponse> => {
  return await request(`/api/v1/admin/private/privacy`, {
    method: "post",
    data: { context: values.context },
  });
};

export const _putPrivacyPolicy = async (values: {
  part: number;
  context: string;
}): Promise<API.DefaultObjectResponse> => {
  return await request(`/api/v1/admin/private/privacy`, {
    method: "put",
    data: { context: values.context, part: values.part },
  });
};
export const _getTermsCondition =
  async (): Promise<API.DefaultObjectResponse> => {
    return await request(`/api/v1/admin/private/termsCondition`, {
      method: "get",
    });
  };

export const _postTermsCondition = async (values: {
  context: string;
}): Promise<API.DefaultObjectResponse> => {
  return await request(`/api/v1/admin/private/termsCondition`, {
    method: "post",
    data: { context: values.context },
  });
};

export const _putTermsCondition = async (values: {
  part: number;
  context: string;
}): Promise<API.DefaultObjectResponse> => {
  return await request(`/api/v1/admin/private/termsCondition`, {
    method: "put",
    data: { context: values.context, part: values.part },
  });
};

export const _getCMSImage = async (
  session_id: number
): Promise<API.DefaultObjectResponse> => {
  return await request(`/api/v1/admin/private/cms/${session_id}`, {
    method: "get",
  });
};

export const _updateCMSImage = async (data: {
  file: File;
  session: number;
}): Promise<API.DefaultObjectResponse> => {
  const formData = new FormData();
  formData.append("file", data.file);
  formData.append("session", data.session.toString());
  const result = await request(`/api/v1/admin/private/cms/single-image`, {
    method: "put",
    data: formData,
    requestType: "form", // 指定请求类型为表单
    headers: {
      "Content-Type": "multipart/form-data", // 设置正确的 Content-Type
    },
  });
  return {
    data: result,
    status: true,
    code: 200,
  };
};
