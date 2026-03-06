import { Component, Input, input, model, output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: "./rect.component.html",
  styleUrl: './rect.component.css',
})
export class RectComponent {
  //size = input.required<{width:number, height:number}>();
  //2 way custom binding i.e it is a combination of inuput and output
  //the output must have very specific name for angular to understand that it is custom 2 way binding
  
  //sizeChange = output<{width:number, height:number}>();
  //same name as input but **** add Change after ipName ****
  
  size = model.required<{width:number, height:number}>()
  onReset() {
    //this.sizeChange.emit({width:100,height:100})
    this.size.set({width:100, height:100});
  }
}
