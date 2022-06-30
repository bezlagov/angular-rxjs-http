import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { Album } from "./album";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  data: Album[]=[];

  constructor(private testService: TestService) { }
 
  ngOnInit(): void {
    this.testService.getData().subscribe((res:Album[]) => {
      this.data = this.data.concat(res);
      console.log(this.data);
    });
  }


}
