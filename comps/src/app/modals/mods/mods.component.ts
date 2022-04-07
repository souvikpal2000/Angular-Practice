import { Component, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mods',
  templateUrl: './mods.component.html',
  styleUrls: ['./mods.component.css']
})
export class ModsComponent implements OnInit {

  @Output() sender = new EventEmitter();

  constructor(private el: ElementRef) {
    console.log(el.nativeElement);
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  ngOnDestroy(): void{
    this.el.nativeElement.remove();
  }

  closeModal = () => {
    this.sender.emit(false);
  }
}
