import { Component, OnInit } from '@angular/core';
import { RequestService } from './request-service.service';

@Component({
  selector: 'app-third-task',
  templateUrl: './third-task.component.html',
  styleUrls: ['./third-task.component.css']
})
export class ThirdTaskComponent implements OnInit {

  createItemInputText: string = "";
  data: any;
  constructor(private request: RequestService) {
    this.getItems();
  }

  ngOnInit(): void {

  }

  getItems() {
    this.request.get().subscribe(items => {
      this.data = items;
    });
  }

  onRemoveItem(id) {
    this.request.delete(id).subscribe(data => {
      this.getItems();
    });
  }

  onEditClick(item, name) {
    item.exerciseName = name;
    this.request.put(item).subscribe(data => {
      this.getItems();
    });
  }

  onClickAddItem() {
    if (this.createItemInputText === "") {
      return;
    }
    this.request.post(this.createItemInputText).subscribe(data => {
      this.getItems();
      this.createItemInputText = "";
    });
  }

}
