import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './data-binding.component.html',
  styles: ``
})

export class DataBindingComponent {
  public clickCount: number = 0;
  public urlImagem: string = "https://picsum.photos/200";
  public name: string = "";
  increment() {
    this.clickCount++;
  }
  resetCount() {
    this.clickCount=0;
  }
  keyUp($event: KeyboardEvent){
   this.name += $event.key
  }
}
