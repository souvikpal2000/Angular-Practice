import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  constructor(private element: ElementRef) {   
    console.log("Custom Directive Used");
  }

  @Input('appClass') set textColor(textColor:string){
    this.element.nativeElement.style.color = textColor;
  }

}
