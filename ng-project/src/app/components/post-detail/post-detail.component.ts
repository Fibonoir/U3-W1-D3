import { ActivatedRoute } from '@angular/router';
import { iPost } from '../../interfaces/i-post';
import { posts } from './../../../../public/posts';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {
  post!: iPost

  constructor(private route:ActivatedRoute){}

  ngOnInit(){

    this.route.params.subscribe((params:any) => {

      console.log(params)
      const found = posts.find(p => p.id == params.id)
      if(found){
        console.log(found);

        this.post = found
      }else{
        console.log("Not found");

      }
    })
  }
}
