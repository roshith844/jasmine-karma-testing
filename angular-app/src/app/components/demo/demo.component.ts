import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  count = 0;
  increaseNumber() {
    this.count++
  }

  decreaseNumber() {
    this.count--
  }
}
