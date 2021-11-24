import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';
@Component({
  selector: 'app-footer-post',
  templateUrl: './footer-post.component.html',
  styleUrls: ['./footer-post.component.css']
})
export class FooterPostComponent implements OnInit {
  posts:Array<BlogPost>
  constructor(private data: PostService) { }

  ngOnInit(): void {
     this.data.getPosts(1, null, null).subscribe(data => this.posts = data.slice(0,3));
  }

}
