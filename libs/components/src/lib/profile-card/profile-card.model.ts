import SocialMediaIconModel from '../social-media-icon/social-media-icon.model';

export interface ProfileCardModel {
  profilePictureLink: string;
  name: string;
  role: string;
  biography: string;
  socialMediaLinks: SocialMediaIconModel[];
}

export default ProfileCardModel;
