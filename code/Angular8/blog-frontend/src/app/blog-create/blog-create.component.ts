import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from './../blog-http.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(
    private blogHttpService: BlogHttpService,
    private _route: ActivatedRoute,
    private router: Router) {}

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ['Comedy', 'Drama', 'Action', 'Technology'];

  ngOnInit() {
  }

  public createBlog(): any {
    const blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    };

    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log('Blog Created');
        console.log(data);
        alert('Blog Posted successfully');
        setTimeout(() => {
          this.router.navigate(['/blog', data.data.blogId]);
        }, 1000);
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );

  }

}
