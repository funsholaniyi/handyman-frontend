import { MiniUser } from './account.model';

export class CustomerReportsModel {
  businessId: string;
  testChannel: string;
  publicId: string;
  ifCompleted: boolean;
  user: MiniUser[];
}

export const CustomerReportsModelSample: CustomerReportsModel[] = [
  {
    businessId: 'ewewe-2323-4343',
    testChannel: 'IVR (Phone Call)',
    ifCompleted: true,
    publicId: '12232-43432-546456',
    user: [{
      firstName: 'Mariam',
      lastName: 'Addo',
      phoneNumber: '233051693345'
    }]
  }
];
