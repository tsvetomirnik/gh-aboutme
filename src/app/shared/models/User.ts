import { SocialIcon } from '../models/SocialIcon';

export class User {
  name: string;
  nickname: string;
  avatarUrl: string;
  bio: string;
  location: string;
  company: string;
  socialIcons: SocialIcon[];
}
