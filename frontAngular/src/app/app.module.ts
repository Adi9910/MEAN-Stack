import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemListComponent } from './item-list/item-list.component';
import { DataComponent } from './observ/observ.component';
import { ExtraComponent } from './extra/extra.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    DataComponent,
    ExtraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
