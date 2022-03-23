import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-custom-pipes';
  inputText = '';
  inputDate = '';
  inputAmount = '';
  inputDistance = 0;
  onChangeInput = (value: Event) => {
    this.inputText = (value.target as HTMLInputElement).value;
  }
  onChangeDate = (value: Event) => {
    this.inputDate = (value.target as HTMLInputElement).value;
  }
  onChangeAmount = (value: Event) => {
    this.inputAmount = (value.target as HTMLInputElement).value;
  }
  onChangeDistance = (value: Event) => {
    this.inputDistance = parseFloat((value.target as HTMLInputElement).value);
  }
}
