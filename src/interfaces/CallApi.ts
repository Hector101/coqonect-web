export type IAPICallParameters = {
  url: string;
  data?: ({}) | any;
  method?: 'post' | 'get';
  headers?: ({}) | any;
  responseType?: string;
  upload?: boolean;
};

export type IResponseData = {
  payload: ({}) | any;
  success: boolean;
  message: string;
  status: number;
};

export type CallApiType = (param: IAPICallParameters) => Promise<IResponseData>;
