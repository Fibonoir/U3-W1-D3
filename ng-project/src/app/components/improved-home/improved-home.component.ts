import { iPost } from './../../interfaces/i-post';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { TagsService } from '../../services/tags.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-improved-home',
  templateUrl: './improved-home.component.html',
  styleUrls: ['./improved-home.component.scss']
})
export class ImprovedHomeComponent implements OnInit {

  tags!: string[];
  selectedTag: string="SHOW ALL"


  @Output() tagSelected = new EventEmitter<string>();

  constructor(private postsService: PostsService, private tagsService: TagsService) {}

  ngOnInit(): void {
    this.tagsService.getAllTags().then(tags => {
      this.tags = ['SHOW ALL', ...tags.map(tag => new UpperCasePipe().transform(tag))];
    });
  }

  onTagClick(tag: string): void {
    console.log("tag clicked");
    this.selectedTag = tag;
    this.tagSelected.emit(tag);
  }
}
