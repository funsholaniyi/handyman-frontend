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

export interface UserBusiness {
  businessName: string;
  publicId: string;
}


export class UserProfileModel {
  public publicId: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: string;
  public defaultBusiness: UserBusiness;
}

export interface MiniUser {
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
}
