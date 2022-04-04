import { Directive,ViewContainerRef,TemplateRef,Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }
  
  @Input("appTimes") set render(value: number){
    for(let i=0;i<value;i++){
      this.viewContainer.createEmbeddedView(this.template,{});
    }
  }
}
