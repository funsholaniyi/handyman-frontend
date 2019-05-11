import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, of } from 'rxjs';
import { isNullOrUndefined } from '../helpers/utils';
import { UserBusiness, UserProfileModel } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  protected currentUser = new UserProfileModel();

  constructor(private localStorage: LocalStorageService) {
    // this.currentUser = this.localStorage.get('_the_roof_profile_') ? JSON.parse(this.localStorage.get('_the_roof_profile_')) : null;
  }

  getUserId(): string {
    this.currentUser = JSON.parse(this.localStorage.retrieve('_roof_profile_'));
    return this.currentUser.publicId;
  }

  getCurrentUser(): Observable<UserProfileModel> {
    const value = this.localStorage.retrieve('_roof_profile_');
    if (value !== '' || ' ') {
      // this.currentUser = JSON.parse(value);
      this.currentUser = {
        firstName: 'Funsho',
        lastName: 'Olaniyi',
        defaultBusiness: {
          businessName: 'Ministry of Agriculture',
          publicId: '23243433'
        },
        phoneNumber: '0501693345',
        email: 'agric@ministry.com',
        publicId: '32423423'
      };
      return of(this.currentUser);
    } else {
      return of(null);
    }
  }

  getCurrentBusiness(): UserBusiness {
    this.currentUser = {
      firstName: 'Funsho',
      lastName: 'Olaniyi',
      defaultBusiness: {
        businessName: 'Ministry of Agriculture',
        publicId: '23243433'
      },
      phoneNumber: '0501693345',
      email: 'agric@ministry.com',
      publicId: '32423423'
    };
    return this.currentUser.defaultBusiness;
  }

  getToken() {
    const tk = this.localStorage.retrieve('_roof_token_');
    if ((!isNullOrUndefined(tk))) {
      return this.localStorage.retrieve('_roof_token_');
    }
  }

  addToken(token: string) {
    // we delete the existing first
    this.localStorage.clear('_roof_token_');

    // then add
    if (!isNullOrUndefined(token)) {
      this.localStorage.store('_roof_token_', token);
    }
  }

  isLoggedIn() {
    const token = this.localStorage.retrieve('_roof_token_');
    this.currentUser = JSON.parse(this.localStorage.retrieve('_roof_profile_'));
    if ((!isNullOrUndefined(token)) && (!isNullOrUndefined(this.currentUser))) {
      return token.length > 0;
    }
  }

  addUserProfile(userProfile: UserProfileModel) {
    this.localStorage.store('_roof_profile_', JSON.stringify(userProfile));
  }


  addEmail(email: string) {
    console.log(email);
    this.localStorage.store('_roof_user_email_', email);
  }

  logout() {
    this.localStorage.clear('_roof_user_email_');
    this.localStorage.clear('_roof_profile_');
    this.localStorage.clear('_roof_token_');
  }

}
