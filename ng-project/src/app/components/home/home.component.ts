import { Component, OnInit } from '@angular/core';
import { iPost } from '../../interfaces/i-post';
import { iJSONresponse } from '../../interfaces/i-jsonresponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuredPost!:iPost
  postArr:iPost[] = []

  ngOnInit(): void {

    fetch ('db.json')
    .then (res => <Promise<iJSONresponse>> res.json())
    .then (res => {

      this.featuredPost = res.posts[0]
      this.postArr = res.posts
    })

  }

}
