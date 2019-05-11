import { MiniUser } from './account.model';

export interface CreateTestRequestsModel {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  businessId: string;
  testChannel: string;
}

export class TestRequestsModel {
  businessId: string;
  testChannel: string;
  publicId: string;
  ifCompleted: boolean;
  user: MiniUser;
}

