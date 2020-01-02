import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Category } from '../category';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category;
  error: {};
  constructor(
    private _blogpostService: BlogpostService
    ) { }

  ngOnInit() {
    this._blogpostService.getCategories().subscribe(
      (data: Category) => this.categories = data,
      error => this.error = error
    );
  }

}
