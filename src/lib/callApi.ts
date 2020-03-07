import fetch from 'isomorphic-unfetch';

import { IAPICallParameters, IResponseData, CallApiType } from 'src/interfaces/CallApi';

const callApi: CallApiType = async ({
  url,
  data,
  method = 'post',
  headers,
}: IAPICallParameters): Promise<IResponseData> => {
  try {
    const response = await fetch(`${process.env.API_URL}${url}`, {
      method,
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(data),
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
