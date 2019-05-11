import { MiniUser } from './account.model';

export interface CreateServiceRequestsModel {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  testChannel: string;
}

export class ServiceRequestsModel {
  testChannel: string;
  publicId: string;
  ifCompleted: boolean;
  user: MiniUser;
}

