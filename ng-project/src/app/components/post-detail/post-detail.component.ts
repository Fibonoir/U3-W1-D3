import { ActivatedRoute } from '@angular/router';
import { iPost } from '../../interfaces/i-post';
import { posts } from './../../../../public/posts';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post!: iPost;
  showEditForm = false;
  postIndex!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.postIndex = posts.findIndex(p => p.id == id);
      this.post = posts[this.postIndex];
    });
  }
  onSubmitForm(form: NgForm) {
    if (form.valid) {
      Object.assign(this.post, form.value);
      posts[this.postIndex] = this.post;
      console.log('Form submitted', this.post);
    } else {
      console.log('Form is invalid');
    }
  }
}
