import { Component, ViewChild } from '@angular/core';
import { STORE_NAVBAR_MENU } from 'src/app/common/constants';
import { ACCORDION_FILTERS } from 'src/app/common/constants';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public isMenuOpen: boolean = false;

  public navbarMenu: any[];

  constructor() {
    this.navbarMenu = STORE_NAVBAR_MENU;
  }

  
  


  }