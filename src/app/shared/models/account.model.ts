export class UserLoginModel {
  public email: string;
  public password: string;
}

export interface CheckIfEntityExists {
  exists: boolean;
}

export interface UserRegisterModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserResetPasswordModel {
  email: string;
}


export class UserProfileModel {
  public publicId: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: string;
}

export interface MiniUser {
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
}

export interface HandymanModel {
  rating: string;
  available: boolean;
  _id: string;
  location: string;
  username: string;
  hourlyRate: number;
  baseRate: number;
  occupation: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}


export const sampleUser: UserProfileModel = {
  publicId: '5cd58a2969fc420017b3a11a',
  firstName: 'Oyin',
  lastName: 'Williams',
  email: 'sample@sample.com',
  phoneNumber: '07085827380'
};
