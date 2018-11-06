import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from './../blog-http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  constructor(
    private blogHttpService: BlogHttpService,
    private _route: ActivatedRoute,
    private router: Router) {}

  public currentBlog: any;
  public possibleCategories = ['Comedy', 'Drama', 'Action', 'Technology'];

  ngOnInit() {
    const myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data['data'];
        console.log('current blog is');
        console.log(this.currentBlog);
      },
      error => {
        console.log('some error occurred');
        console.log('error.errorMessage');
      }
    );
  }

  public editThisBlog(): any {
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      data => {
        console.log(data);
        console.log('Blog edited successfully');
        setTimeout(() => {
          this.router.navigate(['/blog', this.currentBlog.blogId]);
        }, 1000);
      }
    );
  }
}
