import { Component } from '@angular/core';
import { PostInterface } from '../../../interfaces/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  post!: PostInterface;
  related!: PostInterface[];
  posts: PostInterface[] = [];

  constructor() {
    this.loadPosts().then(() => {
      this.post = this.getTopPost();
      this.related = this.getRandomPosts(4);
    });
  }

  async loadPosts(): Promise<void> {
    try {
      const res = await fetch('../../../../public/db.json');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      this.posts = await res.json() as PostInterface[];
    } catch (error) {
      console.error("Failed to load posts: ", error);
    }
  }


  getTopPost(): PostInterface {
    return this.posts[0];
  }

  getRandomPosts(num: number): PostInterface[] {
    const randomPosts: PostInterface[] = [];
    const numHistory: number[] = [];
    while (randomPosts.length < num) {
      const random = Math.floor(Math.random() * this.posts.length);
      if (!numHistory.includes(random)) {
        numHistory.push(random);
        randomPosts.push(this.posts[random]);
      }
    }
    return randomPosts;
  }
}
