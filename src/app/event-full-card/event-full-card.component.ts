import { Component, Input, OnInit } from '@angular/core';
import { TitleCardComponent } from '../components/title-card/title-card.component';
import { Result } from '../models/PhotographerResponse.model';

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
