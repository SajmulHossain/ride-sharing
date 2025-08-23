export interface ErrorResponse {
  statusCode: number;
  data: {
    success: boolean;
    message: string;
    errorSources: IErrorSources[];
    error: Error;
  };
}

interface IErrorSources {
  path: string;
  message: string;
}

interface Error {
  statusCode: number;
}


export interface Response<T> {
  success: true,
  message: string,
  data: T
}