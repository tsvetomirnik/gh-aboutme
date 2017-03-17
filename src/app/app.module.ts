import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ApiService as GitHubApi } from './core/github-api/api.service';
import { AboutmeApiService } from './core/gh-aboutme/gh-aboutme-api';
import { ConfigService } from './shared/services/config.service';
import { UserConfigResolverService } from './shared/services/user-config-resolver.service';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { PageLoaderComponent } from './shared/components/page-loader/page-loader.component';
import { SocialIconPipe } from './shared/pipes/social-icon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PageLoaderComponent,
    SocialIconPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    GitHubApi,
    AboutmeApiService,
    ConfigService,
    UserConfigResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
