import { Component, OnInit } from '@angular/core';
import { iPost } from '../../interfaces/i-post';
import { posts } from '../../../../public/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  featuredPost!:iPost
  postArr:iPost[] = []
  ngOnInit(): void {
    console.log(posts);
    this.featuredPost = posts[0]
    this.postArr = this.shufflePosts(posts.slice(1))

  }

  shufflePosts(array: iPost[]): iPost[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}



