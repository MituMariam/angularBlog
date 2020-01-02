import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blogpost-feature',
  templateUrl: './blogpost-feature.component.html',
  styleUrls: ['./blogpost-feature.component.css']
})
export class BlogpostFeatureComponent implements OnInit {
title = 'Featured Blogs';
blogs: Blogpost;
error: {};
  constructor(
    private _titleService: Title,
    private _blogpostService: BlogpostService
    ) { }

  ngOnInit() {
    this._blogpostService.getFeaturedBlogs().subscribe(
      (data: Blogpost) => this.blogs = data,
      error => this.error = error
    );
    // this._titleService.setTitle(this.title);
    // this._blogpostService.getFeaturedBlogs().subscribe(data => this.blogs = data);
  }

}
