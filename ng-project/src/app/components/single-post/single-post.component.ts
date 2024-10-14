import { Component } from '@angular/core';
import { iPost } from '../../interfaces/i-post';
import { posts } from '../../../../public/posts';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {
  postArr:iPost[] = []

  ngOnInit(): void {
    console.log(posts);
    this.postArr = this.shufflePosts(posts)

  }

  shufflePosts(array: iPost[]): iPost[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}
