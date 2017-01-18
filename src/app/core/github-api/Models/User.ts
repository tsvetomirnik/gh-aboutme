import { UserInput } from '../Inputs';

export class User {
  name: string;
  username: string;
  email: string;
  location: string;
  company: string;
  htmlUrl: string;
  avatarUrl: string;
  bio: string;
  publicRepos: number;
  publicGists: number;
  followers: number;
  following: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(input: UserInput) {
    if (input) {
      this.setInput(input);
    }
  }

  private setInput(input: UserInput) {
    this.name = input.name;
    this.username = input.login;
    this.email = input.email;
    this.bio = input.bio;
    this.location = input.location;
    this.company = input.company;
    this.htmlUrl = input.html_url;
    this.avatarUrl = input.avatar_url;
    this.publicRepos = input.public_repos;
    this.publicGists = input.public_gists;
    this.followers = input.followers;
    this.following = input.following;
    this.createdAt = new Date(input.created_at);
    this.updatedAt = new Date(input.updated_at);
  }
}
