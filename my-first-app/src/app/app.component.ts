import { Component } from '@angular/core';

@Component({
	selector: 'app-root',      
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Password Generator';

	password  = '';
	length = 0;
	includeLetters = false;
	includeNumbers = false;
	includeSpecial = false;

	setLength = (value: Event) => {
		const parsedValue = parseInt((value.target as HTMLInputElement).value);
		if(isNaN(parsedValue) == false){
			this.length = parsedValue;
		}
	}
	wantLetters = () => {
		this.includeLetters = !this.includeLetters;
	}
	wantNumbers = () => {
		this.includeNumbers = !this.includeNumbers;
	}
	wantSpecialChar = () => {
		this.includeSpecial = !this.includeSpecial;
	}

	generatePassword = () => {
		let validChars = '';
		const letters = "abcdefghijklmnopqrstuvwxyz";
		const numbers = "0123456789";
		const special = "!@#$%^&*()<>{}[]/";
		if(this.includeLetters){
			validChars = validChars + letters;
		}
		if(this.includeNumbers){
			validChars = validChars + numbers;
		}
		if(this.includeSpecial){
			validChars = validChars + special;
		}

		let generatedPassword = '';
		for(let i=0;i<this.length;i++){
			const index = Math.floor(Math.random() * validChars.length);
			generatedPassword = generatedPassword + validChars[index];
		}
		this.password = generatedPassword;
	}
}
