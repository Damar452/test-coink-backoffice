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

  public toggleAccordian(panel: any): void{
    this.data.isActive = !this.data.isActive;
    const maxHeight = panel.style.maxHeight;
    panel.style.maxHeight = maxHeight ? null : panel.scrollHeight + 'px';
    this.icon = maxHeight ? statesAccordion.down : statesAccordion.up;
  }

  public toogleChildren(index: number): void{
    this.selected = index;
  }

  public isSelected(index: number): string{
    return index === this.selected ? 'active' : '';
  }


}
