import { Component } from '@angular/core';
import { database, Database } from 'src/app/data/data';

@Component({
  selector: 'app-analiticas',
  templateUrl: './analiticas.component.html',
  styleUrls: ['./analiticas.component.css']
})

export class AnaliticasComponent {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  database: Database = database;

  panelOpenState = false;
  


}
