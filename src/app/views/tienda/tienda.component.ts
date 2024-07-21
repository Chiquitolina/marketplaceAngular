import { Component, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { ACCORDION_FILTERS } from 'src/app/common/constants';
import { AccordionFilter } from 'src/app/common/constants';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {

  filtersState: string = 'Hide';

  accordion = ViewChild(MatAccordion);
  
  accordionFilters : AccordionFilter[] = ACCORDION_FILTERS;

  onDrawerToggle(opened: boolean) {
    this.filtersState = opened ? 'Hide' : 'Show';
  }

}
