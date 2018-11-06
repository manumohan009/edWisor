import { BlogHttpService } from './../blog-http.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog;

    constructor(private _route: ActivatedRoute,
                private router: Router,
                public blogHttpService: BlogHttpService,
                private location: Location) {
    console.log('blog view constructor called');
  }

  ngOnInit() {
    console.log('blog view component onInit called');
    const myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.currentBlog = this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data['data'];
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );
    console.log(this.currentBlog);
  }

  ngOnDestroy() {
    console.log('blog view component destroyed');
  }

  public deleteThisBlog(): any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data => {
        console.log(data);
        console.log('Blog Deleted successfully');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );
  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }
}
