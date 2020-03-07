export type IAPICallParameters = {
  url: string;
  data?: ({}) | any;
  method?: 'post' | 'get';
  headers?: ({}) | any;
  responseType?: string;
};

export type IResponseData = {
  payload: ({}) | any;
  success: boolean;
  message: string;
  status: number;
};

export type CallApiType = (param: IAPICallParameters) => Promise<IResponseData>;
