import { Component } from '@angular/core';
import { iPost } from '../../interfaces/i-post';
import { posts } from '../../../../public/posts';


@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent {
  activePosts!: iPost[];

  ngOnInit() {
    this.activePosts = posts.filter(post => post.active === true);
    console.log(this.activePosts);
  }
}
