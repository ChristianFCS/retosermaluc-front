import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UtilService } from '../services/util/util.service';


export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const util = inject(UtilService);

 
  const token = util.obtenerToken();
  if (token) {
    return true
  }
  else {

    router.navigate(['/login'])
    return false;

  }

};
