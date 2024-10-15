import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { iPost } from '../../interfaces/i-post';
import { PostsService } from '../../services/posts.service';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnChanges {
  @Input() selectedTag!: string;
  postArr: iPost[] = [];
  filteredPosts: iPost[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedTag'] && !changes['selectedTag'].firstChange) {
      this.filterPosts();
    }
  }

  private fetchPosts(): void {
    this.postsService.fetchPosts().then(posts => {
      this.postArr = posts;
      this.filterPosts();
    });
  }

  private filterPosts(): void {
    if (this.selectedTag === 'SHOW ALL') {
      this.filteredPosts = this.postArr;
    } else if (this.selectedTag) {
      const lowerCaseTag = new LowerCasePipe().transform(this.selectedTag);
      this.filteredPosts = this.postArr.filter(post => post.tags.includes(lowerCaseTag));
    } else {
      this.filteredPosts = this.postArr;
    }
  }
}
