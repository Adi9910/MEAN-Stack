import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
})
export class ItemListComponent {
  items: any[] = [];
  newItemName: string = '';
  editedItemName: string = '';
  selectedItem: any = null;

  constructor(private http: HttpClient) {
    this.fetchItems();
  }

  fetchItems(): void {
    this.http.get<any[]>('http://localhost:3000/items').subscribe(data => {
      this.items = data;
    });
  }

  addItem(): void {
    const newItem = { name: this.newItemName };
    this.http.post('http://localhost:3000/items', newItem).subscribe(() => {
      this.fetchItems();
      this.newItemName = '';
    });
  }

  editItem(item: any): void {
    this.selectedItem = item;
    this.editedItemName = item.name;
  }

  saveEditedItem(): void {
    if (this.selectedItem) {
      const updatedItem = { ...this.selectedItem, name: this.editedItemName };
      this.http.put(`http://localhost:3000/items/${this.selectedItem.id}`, updatedItem).subscribe(() => {
        this.fetchItems();
        this.selectedItem = null;
        this.editedItemName = '';
      });
    }
  }

  deleteItem(item: any): void {
    this.http.delete(`http://localhost:3000/items/${item.id}`).subscribe(() => {
      this.fetchItems();
    });
  }
}
