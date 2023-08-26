import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontAngular';
  Hidden = true;
  name: string = '';
  emp: number = 0;
  posts: any;
  constructor(private service: PostService) {}
  group = [{ name: 'Aditya', emp: 23 }];
  switch() {
    this.Hidden = !this.Hidden;
  }
  add() {
    this.group.push({
      name: this.name,
      emp: this.emp,
    });
    console.log('grouop', this.group);
  }

  ngOnInit() {
    this.service.getPosts().subscribe((res) => {
      this.posts = res;
    });
  }
}
