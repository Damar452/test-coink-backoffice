import { Component} from '@angular/core';
import { items } from 'src/app/core/constants/accordion-constants';
import { statesAccordion } from 'src/app/core/enums/acorddion-enum';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent{

  public data: any = items;
  public selected: number;
  public icon: string = statesAccordion.down;

  public toggleAccordian(panel: any) {
    
    this.data.isActive = !this.data.isActive;

    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
      this.icon = statesAccordion.down;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      this.icon = statesAccordion.up; 
    }
  }

  public toogleChildren(index: number){
    this.selected = index;
  }

  public isSelected(index: number){
    return index === this.selected ? 'active' : '';
  }

}
