import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import blogData from '../blogData.json';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  blogPosts: Array<BlogPost> = blogData;
  ngOnInit(): void {
  }

}
