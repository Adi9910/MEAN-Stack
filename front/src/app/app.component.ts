import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  entered='';
  newPost = 'No Content';
  isValid : Boolean = false

  addBtn() {
    this.newPost = this.entered;
  }
  onCreate(){
    this.isValid = !this.isValid
  }

}