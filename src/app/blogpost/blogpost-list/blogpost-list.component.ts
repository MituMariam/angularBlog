import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

title = 'Blog Lists';
blogs : Blogpost;
error : {};

  constructor(
    private _titleService: Title,
    private _blogpostService: BlogpostService
  ) { }

  ngOnInit() {
    // this._titleService.setTitle(this.title);
    this._blogpostService.getBlogs().subscribe(
      (data: Blogpost) => this.blogs = data,
    error => this.error = error
    )
    // this._titleService.setTitle(this.title);
    // this._blogpostService.getBlogs().subscribe(data => this.blogs = data);
  }

}
