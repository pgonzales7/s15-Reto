import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarComponent } from './mostrar/mostrar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MostrarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MostrarComponent
  ]
})
export class PrincipalModule { }
