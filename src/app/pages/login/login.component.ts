import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';
import { UtilService } from '../../services/util/util.service';
import { AuthService } from '../../services/auth/auth.service';
import { USUARIO_STORAGE } from '../../config/properties';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  formulario: FormGroup = this.formBuilder.group({

    username: ['', Validators.required],
    password: ['', Validators.required],


  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private storage: StorageService,
    private utils: UtilService,
    private authService: AuthService
  ) {


  }



  iniciarSesion() {

    console.log(this.formulario.value);
    this.authService.login(this.formulario.value).subscribe((res) => {
      if(!res.estado){
        return;
      } 
      if(!res.payload.estado){
        return;
      } 

      this.storage.guardar(USUARIO_STORAGE,res.payload.body);
      this.router.navigate(['/main']);

    });


    

  }


}
