import { IonIcon } from '@ionic/angular/standalone';
import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.scss'],
  standalone:true,
  imports:[IonIcon]
})
export class TitleCardComponent  {
@Input()name:string="";

}
