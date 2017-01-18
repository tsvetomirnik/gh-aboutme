import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import * as GitHub from '../core/github-api';
import { User } from '../shared/models/User';
import { UserConfigResolverService } from '../shared/services/user-config-resolver.service';

import { ConfigService } from '../shared/services/config.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(
    private title: Title,
    private gitHubApi: GitHub.ApiService,
    private config: ConfigService,
    private userConfigResolver: UserConfigResolverService
  ) { }

  ngOnInit() {

    this.config.getConfiguration()
      .subscribe(userConfig => {

        this.title.setTitle(`${userConfig.githubUsername}`);
        this.gitHubApi.getUser(userConfig.githubUsername)
          .subscribe(user => {
            this.user = this.userConfigResolver.resolve(user, userConfig);
          });

      });
  }
}
