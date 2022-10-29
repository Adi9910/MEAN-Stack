import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  entered='';
  newPost = 'No Content';

  addBtn() {
    this.newPost = this.entered;
  }
}
