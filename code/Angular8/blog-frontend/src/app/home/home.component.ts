import { BlogHttpService } from './../blog-http.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  public allBlogs;
  constructor(public blogHttpService: BlogHttpService) {
    console.log('Home component constructor called ');
  }

  ngOnInit() {
    console.log('Home component onInit called ');
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
      data => {
        console.log(data);
        this.allBlogs = data['data'];
      },
      error => {
        console.log('some error occured');
        console.log('error.errorMessage');
      });

      console.table(this.allBlogs);
  }

  ngOnDestroy(): void {
    console.log('Home component destroyed ');
  }
}
