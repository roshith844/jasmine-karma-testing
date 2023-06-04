import { Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  constructor(private service: DemoService){}
  count = 0;
  private status = ''
  increaseNumber() {
    this.count++
  }

  decreaseNumber() {
    this.count--
  }
  private printWorking() {
    this.status = 'working'
  }
  // 
  studentName: string = ''
  setName() {
    this.studentName = 'Roshith'
  }
}
