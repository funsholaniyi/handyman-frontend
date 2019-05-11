import { sampleUser } from './account.model';

export interface APIResponseModel {
  message: string;
  status: string;
  body: any | any[];
  Authorization?: string;
}

export const sampleLoginResponse: APIResponseModel = {
  message: 'Login Successful',
  status: 'success',
  body: sampleUser,
  Authorization:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2Q1Njg4NGM4Zjc2YjAwMTczMjQ1ODUiLCJpYXQiOjE1NTc1MjY4MzAsImV4cCI6MTU4OTA2MjgzMH0.OBNyMhr6RBso0YeM1CWYXznW3Tx5P85hal8p0GEJkC8'
};
