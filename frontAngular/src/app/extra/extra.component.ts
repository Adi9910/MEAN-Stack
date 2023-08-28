import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';
@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {
  title = 'frontAngular';
  Hidden = true;
  name: string = '';
  emp: number = 0;
  posts: any = [];

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
    console.log('group', this.group);
  }
  call() {
    this.service.getPosts().subscribe((res) => {
      this.posts = res;
    });
  }

  ngOnInit() {
    this.call();
  }
}
