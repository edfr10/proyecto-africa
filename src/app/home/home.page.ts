import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private navController : NavController){}

  registros(){

    this.navController.navigateForward('registros'); 
  }
  ingreso(){

    this.navController.navigateForward('ingreso');
}
}