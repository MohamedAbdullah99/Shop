import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private http:HttpClient, private rout:ActivatedRoute) { }

  url= "https://jsonplaceholder.typicode.com/posts"
  postId;
  posts;
  ngOnInit(): void {
    this.http.get(this.url).subscribe( response=> {
      this.posts = response;
      console.log(response)
    } );
    this.postId = this.rout.snapshot.paramMap.get('id');
  }
}
