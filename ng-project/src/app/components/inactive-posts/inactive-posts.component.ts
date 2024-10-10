import { Component } from '@angular/core';
import { posts } from '../../../../public/posts';
import { iPost } from '../../interfaces/i-post';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {
  inactivePosts!: iPost[]


  ngOnInit(){
    this.inactivePosts = posts.filter(post => post.active === false);
    console.log(this.inactivePosts);

  }
}
