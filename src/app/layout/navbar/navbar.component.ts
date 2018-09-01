  import { Component, OnInit } from '@angular/core';
  import { Router } from '../../../../node_modules/@angular/router';
  import { TranslateService } from '@ngx-translate/core';

  @Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
  })
  export class NavbarComponent implements OnInit {

    controla: boolean;
    constructor(public router: Router,
                public translate: TranslateService) {
                  this.translate.addLangs(['pt-br', 'fr']);
                  this.translate.setDefaultLang('pt-br');
                }

    ngOnInit() {
    }
    openNav() {
      if (this.controla === true) {
        document.getElementById('mySidenav').style.width = '0';
        this.controla = false;
      } else {
        document.getElementById('mySidenav').style.width = '250px';
        this.controla = true;
      }
    }

  }
