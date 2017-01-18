import { Injectable } from '@angular/core';

import * as GitHub from '../../core/github-api';
import { IUserConfig, ISocialIconConfig } from '../interfaces';
import { User, SocialIcon } from '../models';
import { SocialIconTypes } from '../enums';

@Injectable()
export class UserConfigResolverService {

  resolve(githubUser: GitHub.User, config: IUserConfig): User {
    let user = new User();
    user.name = config.name ? config.name : githubUser.name;
    user.avatarUrl = config.avatarUrl ? config.avatarUrl : githubUser.avatarUrl;
    user.username = config.username === true ? githubUser.username : (config.username ? config.username : null);
    user.bio = config.bio === true ? githubUser.bio : (config.bio ? config.bio : null);
    user.location = config.location === true ? githubUser.location : (config.location ? config.location : null);
    user.company = config.company === true ? githubUser.company : (config.company ? config.company : null);
    user.socialIcons = config.socialIcons.map(p => this.resolveSocialIcons(p));
    return user;
  }

  private resolveSocialIcons(p: ISocialIconConfig) {
    let profileModel = new SocialIcon();
    profileModel.type = p.type;
    profileModel.link = p.link;
    profileModel.text = p.text;
    return profileModel;
  }
}
