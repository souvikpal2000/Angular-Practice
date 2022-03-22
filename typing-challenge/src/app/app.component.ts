import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing-challenge';

  text = `A computer comprises a monitor, a keyboard, a mouse, a CPU, and a UPS as essential parts. A computer is known for its abundant storage space. Human is now mostly dependent on the technology, and the use of computer can be found in every field, from students for their academic purposes to office workers for their work.`;

  matchedText = '';

  inputText = (value: Event) => {
    this.matchedText = (value.target as HTMLInputElement).value
    console.log(this.matchedText);
  }

  decideClass = (letter:string, enteredLetter:string) => {
    let status="";
    if(!enteredLetter){
      status = "pending";
    }
    else if(letter === enteredLetter){
      status = "correct";
    }
    else if(letter !== enteredLetter){
      status = "wrong";
    }
    return status;
  }
}
