import fetch from 'isomorphic-unfetch';

interface IAPICallParameters {
  url: string;
  data?: ({}) | any;
  method?: 'post' | 'get';
  headers?: ({}) | any;
  responseType?: string;
}

interface IResponseData {
  payload: ({}) | any;
  success: boolean;
  message: string;
  status: number;
}

const callApi = async ({
  url,
  data,
  method = 'post',
  headers,
}: IAPICallParameters): Promise<IResponseData> => {
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
};

export default callApi;
