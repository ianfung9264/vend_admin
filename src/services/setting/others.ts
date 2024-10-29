import { request } from "@umijs/max";

export const _getBannerVideo = async (): Promise<API.DefaultObjectResponse> => {
  const result = await request(`/api/v1/global/public/cms/9527`, {
    method: "get",
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

export const _updateBannerVideo = async (values: {
  youtube_url: string;
}): Promise<API.DefaultObjectResponse> => {
  const result = await request(`/api/v1/admin/private/cms/banner`, {
    method: "put",
    params: {
      url: values.youtube_url,
    },
  });
  return {
    data: result,
    status: true,
    code: 200,
  };
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
