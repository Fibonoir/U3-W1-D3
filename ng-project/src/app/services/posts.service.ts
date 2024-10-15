import { iPost } from './../interfaces/i-post';
import { posts } from './../../../public/posts';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private dbUrl = 'db.json';

  constructor() {}

  async fetchPosts(): Promise<iPost[]> {
    const response = await fetch(this.dbUrl);
    const data = await response.json();
    return data.posts;
  }
}
