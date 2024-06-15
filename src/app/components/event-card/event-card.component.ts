import { IonIcon } from '@ionic/angular/standalone';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TitleCardComponent } from "../title-card/title-card.component";

@Component({
    selector: 'app-event-card',
    standalone: true,
    templateUrl: './event-card.component.html',
    styleUrls: ['./event-card.component.scss'],
    imports: [IonIcon, TitleCardComponent]
})
export class EventCardComponent {
  @Input() image: string;
  @Input() name: string;
  @Input() id: string;

  private router = inject(Router);

  constructor() {
    this.image = '';
    this.name = '';
    this.id = '';
  }

  showEvent(id: string) {
    this.router.navigateByUrl(`event/${id}`);
  }
}
