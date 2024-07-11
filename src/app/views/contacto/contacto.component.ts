import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, FormGroup, FormControlDirective} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { from } from 'rxjs';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  emailForm: FormGroup; // Declaración del formulario

  constructor() {
    this.emailForm = new FormGroup({
      from: new FormControl(''),
      subject: new FormControl(''),
      mail: new FormControl('')
    })
  }


  matcher = new MyErrorStateMatcher();

}
