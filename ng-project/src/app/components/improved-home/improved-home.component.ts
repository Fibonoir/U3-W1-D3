import { Component } from '@angular/core';
import { iPost } from '../../interfaces/i-post';
import { posts } from '../../../../public/posts';

@Component({
  selector: 'app-improved-home',
  templateUrl: './improved-home.component.html',
  styleUrl: './improved-home.component.scss'
})
export class ImprovedHomeComponent {

  featuredPost!:iPost

  ngOnInit(): void {
    console.log(posts);
    this.featuredPost = posts[0]

  }

}
