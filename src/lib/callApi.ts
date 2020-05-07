import fetch from 'isomorphic-unfetch';
import store from 'store';

import { IAPICallParameters, IResponseData, CallApiType } from 'src/interfaces/CallApi';

const callApi: CallApiType = async ({
  url,
  data,
  method = 'post',
  upload = false,
}: IAPICallParameters): Promise<IResponseData> => {
  try {
    const body = upload ? data : JSON.stringify(data);
    const token = store.get('__cnt');

    const customeHeader = { authorization: token ? `Bearer ${token}` : '' };

    const response = await fetch(`${process.env.API_URL}${url}`, {
      method,
      body,
      headers: {
        ...customeHeader,
        ...(!upload && { 'Content-Type': 'application/json' }),
      },
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
