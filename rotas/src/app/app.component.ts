import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pag = "";
  
  onPag(pagina){
    this.pag = pagina;
    console.log('ok')
  }

  title = 'rotas';
}
