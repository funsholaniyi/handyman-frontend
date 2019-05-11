export interface APIResponseModel {
  message: string;
  status: string;
  body: any | any[];
  Authorization?: string;
}
