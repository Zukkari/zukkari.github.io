export interface ProfileInformation {
  profilePictureLink: string;
  name: string;
  role: string;
  biography: string;
  socialMediaLinks: SocialMediaModel[];
}

export interface SocialMediaModel {
  iconUrl: string;
  profileUrl: string;
}
