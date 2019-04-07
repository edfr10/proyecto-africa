import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage {

  constructor(private navController : NavController) { }

  ingreso(){

    this.navController.navigateForward('ingreso');


}
}