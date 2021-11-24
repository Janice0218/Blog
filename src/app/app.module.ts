import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostCardComponent } from './post-card/post-card.component';
import { SearchwidgetComponent } from './searchwidget/searchwidget.component';

import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { PostDataComponent } from './post-data/post-data.component';
import { FooterPostComponent } from './footer-post/footer-post.component';
import { HomePostComponent } from './home-post/home-post.component';
import { PagingComponent } from './paging/paging.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    PostComponent,
    PageNotFoundComponent,
    PostCardComponent,
    SearchwidgetComponent,
    
    CategoriesComponent,
    TagsComponent,
    LatestPostsComponent,
    PostDataComponent,
    FooterPostComponent,
    HomePostComponent,
    PagingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
