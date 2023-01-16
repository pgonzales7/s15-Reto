import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent {

  ocultar = "";
Ocultar(event: any){
this.ocultar = event.target.value;
}
twoway : string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo expedita, laudantium debitis sunt et corporis qui dolores aperiam blanditiis consequatur? Quas in soluta quaerat dolore. Nostrum magnam reprehenderit delectus voluptas."
}

