import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostFeatureComponent } from './blogpost-feature/blogpost-feature.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostDetailComponent } from './blogpost-detail/blogpost-detail.component';
import { BlogpostRecentComponent } from './blogpost-recent/blogpost-recent.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [BlogpostFeatureComponent, BlogpostListComponent, BlogpostDetailComponent, BlogpostRecentComponent, CategoriesComponent],
  imports: [
    CommonModule,
    BlogpostRoutingModule
  ],
  exports: [
    BlogpostFeatureComponent
  ]
})
export class BlogpostModule { }
