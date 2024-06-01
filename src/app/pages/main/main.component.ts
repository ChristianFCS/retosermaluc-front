import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from '../../services/file/file.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>



  constructor(

    private router: Router,
    private fileService: FileService,


  ) {

  }


  verResultados() {

    this.router.navigate(['/resultado'])

  }

  cargarArchivos(files: any) {
    console.log(files);
    if (files) {
      const filesArray = Array.from(files.target.files) as File[];
      this.fileService.cargarArchivo(filesArray[0]).subscribe((res) =>{
        if(!res.estado){
          alert(res.mensaje);
          return;
        } 
        if(!res.payload.estado){
          alert(res.payload.mensaje);
          return;
        } 
        alert(res.payload.body);
        
      });
    }

  }


}
