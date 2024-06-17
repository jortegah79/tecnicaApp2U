import { Component, Input } from '@angular/core';
import { TitleCardComponent } from '../title-card/title-card.component';
import { Result } from 'src/app/models/PhotographerResponse.model';

@Component({
  selector: 'app-event-full-card',
  templateUrl: './event-full-card.component.html',
  styleUrls: ['./event-full-card.component.scss'],
  standalone: true,
  imports: [TitleCardComponent],
})
export class EventFullCardComponent  {
  @Input() event?: Result;

}
