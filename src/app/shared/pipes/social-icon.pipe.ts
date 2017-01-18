import { Pipe, PipeTransform } from '@angular/core';
import { SocialIconTypes } from '../enums/SocialIconTypes';

@Pipe({
  name: 'socialIcon'
})
export class SocialIconPipe implements PipeTransform {

  static readonly defaultIcon: string = 'paperclip';
  static readonly prefix: string = 'fa-';

  profileIcons: { [id: string]: string } = { };

  constructor() {
    this.profileIcons[SocialIconTypes.ANGELLIST] = 'angellist';
    this.profileIcons[SocialIconTypes.EMAIL] = 'envelope';
    this.profileIcons[SocialIconTypes.BEHANCE] = 'behance';
    this.profileIcons[SocialIconTypes.CODEPEN] = 'codepen';
    this.profileIcons[SocialIconTypes.DRIBBBLE] = 'dribbble';
    this.profileIcons[SocialIconTypes.FACEBOOK] = 'facebook';
    this.profileIcons[SocialIconTypes.GITHUB] = 'github-alt';
    this.profileIcons[SocialIconTypes.GOOGLE_PLUS] = 'google-plus';
    this.profileIcons[SocialIconTypes.INSTAGRAM] = 'instagram';
    this.profileIcons[SocialIconTypes.LINKEDIN] = 'linkedin';
    this.profileIcons[SocialIconTypes.PINTEREST] = 'pinterest';
    this.profileIcons[SocialIconTypes.STACK_OVERFLOW] = 'stack-overflow';
    this.profileIcons[SocialIconTypes.SKYPE] = 'skype';
    this.profileIcons[SocialIconTypes.TWITTER] = 'twitter';
    this.profileIcons[SocialIconTypes.YOUTUBE] = 'youtube';
    this.profileIcons[SocialIconTypes.WEBSITE] = 'bookmark';
  }

  transform(value: SocialIconTypes, args?: any): any {
    let icon = SocialIconPipe.prefix;

    if (this.profileIcons[value]) {
      icon = icon + this.profileIcons[value];
    } else {
      icon = icon + SocialIconPipe.defaultIcon;
    }

    return icon;
  }

}
