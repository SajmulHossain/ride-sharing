export interface ErrorResponse {
  statusCode: number;
  data: {
    success: boolean;
    message: string;
    errorSources: IErrorSources[];
    error: {
      statusCode: number;
    };
  };
}

interface IErrorSources {
  path: string;
  message: string;
}

export interface IMeta {
  page: number;
  limit: number;
  totalPage: number;
  total: number;
}

export interface Response<T> {
  success: true;
  message: string;
  data: T;
  meta?: IMeta;
}
