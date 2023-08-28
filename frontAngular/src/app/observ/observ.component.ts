import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-observ',
  templateUrl: './observ.component.html',
})
export class DataComponent implements OnInit {
  data: any[] = [];

  constructor(private PostService: PostService) {}

  ngOnInit(): void {
    this.PostService.getData().subscribe((res) => {
      this.data = res;
      console.log('observeData', res.length);
    });
  }
}
