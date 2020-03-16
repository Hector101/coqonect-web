import fetch from 'isomorphic-unfetch';

import { IAPICallParameters, IResponseData, CallApiType } from 'src/interfaces/CallApi';

const callApi: CallApiType = async ({
  url,
  data,
  method = 'post',
  headers,
  upload = false,
}: IAPICallParameters): Promise<IResponseData> => {
  try {
    const body = upload ? data : JSON.stringify(data);

    const response = await fetch(`${process.env.API_URL}${url}`, {
      method,
      mode: 'cors',
      credentials: 'include',
      body,
      ...(!upload && { headers: { 'Content-Type': 'application/json', ...headers } }),
    });
    return await response.json();
  } catch (err) {
    return Promise.resolve({
      success: false,
      message: 'Server Error',
      status: 500 ,
      payload: {},
    });
  }


};

export default callApi;
