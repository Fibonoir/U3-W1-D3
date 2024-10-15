import { Injectable } from '@angular/core';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private postsService: PostsService) { }

  async getAllTags(): Promise<string[]> {
    const posts = await this.postsService.fetchPosts();
    const tags = [...new Set(posts.flatMap(post => post.tags))]
    return tags;
  }
}
