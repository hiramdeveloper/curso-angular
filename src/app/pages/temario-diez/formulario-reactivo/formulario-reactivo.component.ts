import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { controlFieldEqualValidation } from 'src/app/shared/validators/fieldEqualValidator';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.scss']
})
export class FormularioReactivoComponent implements OnInit {

  name = 'Hiram';
  lastName = 'Ramirez';

  userForm = new FormGroup({
    name: new FormControl(this.name, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    age: new FormControl(null),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    confirmEmail: new FormControl(),
    isOlder: new FormControl(false)
  }, {
    validators: controlFieldEqualValidation('email', 'confirmEmail')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userForm);
    // console.log(this.userForm.value);
  }
  
  isValidAge() {
    const edad = this.userForm.controls['age'].value;
    console.log(edad);
    if (edad < 18) {
      this.userForm.controls['isOlder'].setValue(false);
      this.userForm.controls['isOlder'].setErrors({ older: true });
    } else {
      this.userForm.controls['isOlder'].setValue(true);
      this.userForm.controls['isOlder'].setErrors(null);
    }
    console.log(this.userForm.controls['isOlder'].value);
  }

}
