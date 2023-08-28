import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { DataComponent } from './observ/observ.component';
import { ExtraComponent } from './extra/extra.component';

const routes: Routes = [
  { path: 'ext', component: ExtraComponent }, 
  { path: 'item', component: ItemListComponent },  
  { path: 'obs', component: DataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
