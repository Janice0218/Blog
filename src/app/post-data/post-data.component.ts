import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
post:BlogPost;
querySub: any;
  constructor(private data: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
      this.data.getPostByID(params['id']).subscribe(postReceive => { 
        this.post = postReceive;
       
      });
    });
  }
  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }
}
