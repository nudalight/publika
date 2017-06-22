import {Component} from '@angular/core';

@Component({
  selector: 'sign-up',
  styleUrls: ['./sign-up.component.css'],
  templateUrl: './sign-up.component.html'
})

export class SignUpComponent {

  btnText :any;
  count = 0;

  onButtonClick() {
    console.log('button click handler');
    this.btnText = this.count++; // + this.email;
  }

  onFullnameKeyup(event :KeyboardEvent) {
    console.log('fullname keyup', event);
    this.btnText = (<HTMLInputElement> event.target).value;
  }

  onEmailChange() {
    console.log('email change');
  }

}
