import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileInformation } from './profile-information';

@Injectable({
  providedIn: 'root',
})
export class ProfileInfoServiceService {
  constructor() {}

  getProfileInfo(): Observable<ProfileInformation> {
    return new Observable((subscriber) =>
      subscriber.next({
        profilePictureLink: './assets/images/profile.jpg',
        name: 'Stanislav Mõškovski',
        role: '',
        biography: 'This page might get more information soon... Eventually...',
        socialMediaLinks: [
          {
            iconUrl: './assets/images/GITHUB.png',
            profileUrl: 'https://github.com/zukkari',
          },
          {
            iconUrl: './assets/images/LINKEDIN.png',
            profileUrl:
              'https://www.linkedin.com/in/stanislav-m%C3%B5%C5%A1kovski-675ab0122/',
          },
        ],
      })
    );
  }
}
