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

  public flag_cargarArchivos = false;
  public flag_procesarDataCargada = false;
  public flag_descargarExcelProcesado = false;

  constructor(

    private router: Router,
    private fileService: FileService,


  ) {

  }

  cargarArchivos(files: any) {
    
    console.log(files);
    if (files) {
      const filesArray = Array.from(files.target.files) as File[];
      this.flag_cargarArchivos=true;
      this.fileService.cargarArchivo(filesArray[0]).subscribe((res) =>{
        this.flag_cargarArchivos=false;
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

  procesarDataCargada() {
    this.flag_procesarDataCargada=true;
      this.fileService.procesarDataCargada().subscribe((res) =>{
        this.flag_procesarDataCargada=false;
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
  descargarExcelProcesado(){
    this.flag_descargarExcelProcesado=true;
    this.fileService.abrirArchivo().subscribe((res) =>{this.flag_descargarExcelProcesado=false;});
  }

}
