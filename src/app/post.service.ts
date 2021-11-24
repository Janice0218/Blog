import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

import { Observable } from 'rxjs';

import { BlogPost } from './BlogPost';
 var perPage:number =6;

@Injectable({
  providedIn: 'root'
})
export class PostService {
  readonly ROOT_URL="https://hidden-cliffs-51045.herokuapp.com/api";
  constructor(private http: HttpClient) { }
  getPosts(page, tag, category): Observable<BlogPost[]>{
    
    let params = {
      page: page,
      perPage: perPage.toString(),
    }

    if (tag != null || tag != undefined) {
      params["tag"] = tag;
    }

    if (category != null || category != undefined) {
      params["category"] = category;
    }

    return this.http.get<BlogPost[]>(this.ROOT_URL+"/posts",{ params });
  }
  getPostByID(id): Observable<BlogPost> {
    return this.http.get<BlogPost>(this.ROOT_URL+"/posts/"+id);
  }
  getCategories(): Observable<any>{
    return this.http.get<any>(this.ROOT_URL+"/categories");
  }
  getTags(): Observable<string[]>{
    return this.http.get<string[]>(this.ROOT_URL+"/tags");
  }
  }

