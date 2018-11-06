import { Injectable } from '@angular/core';
// importing http client to make the requests
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// import observable related code
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  private authToken = 'NGUxZGQ2NGJiNzgyNDcwMmRiMDRkMDY5NWFmMDE0Mjc3NjJmZmE0YzI3M2Q0ZjljZTFhMmQ0YzM2MjM2ZDkxM2U1MDE2NWU2M2JlMjMxNjRkMDMwN2YxYWM2MzlkZGU4NzU0YzQxMTRmNDRlMGY0MWM4NWMzNzk2NmE4MWNiNmNmZg=='
  constructor(private _http: HttpClient) {
    console.log('blog-http service was called');
   }

   // exception handler
   private handleError(err: HttpErrorResponse) {
     console.log('Handle error http calls');
     console.log(err.message);
     return Observable.throw(err.message);
   }

   // method to return all the blogs
  public getAllBlogs(): any {
    const myResponse = this._http.get(this.baseUrl + '/all?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;
  }

   // method to get a particular blog
   public getSingleBlogInformation(currentBlogId): any {
     const myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken);
     return myResponse;

   }

   public createBlog(blogData): any {
     const myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData);
     return myResponse;
   }

   public deleteBlog(blogId): any {
     const data = {};
     const myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data);
     return myResponse;
   }

   public editBlog(blogId, blogData): any {
     const myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData);
     return myResponse;
   }
}
