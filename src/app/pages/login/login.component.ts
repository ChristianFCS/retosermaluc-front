import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';
import { UtilService } from '../../services/util/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  formulario: FormGroup = this.formBuilder.group({

    email: ['', Validators.required],
    password: ['', Validators.required],


  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private storage: StorageService,
    private utils: UtilService,
  ) {

  }



  iniciarSesion() {

    console.log(this.formulario.value);

    this.router.navigate(['/main'])

  }


}
