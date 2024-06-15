import { StorageService } from '../../services/storage.service';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonGrid,
  IonCol,
  IonRow,
} from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Result } from 'src/app/models/PhotographerResponse.model';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { EventFullCardComponent } from 'src/app/event-full-card/event-full-card.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
  standalone: true,
  imports: [
    IonRow,
    IonCol,
    IonGrid,
    IonIcon,
    IonButton,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    EventFullCardComponent,
  ],
})
export class EventPage {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private storage = inject(StorageService);
  event?: Result;

  constructor() {
    this.activatedRoute.params.subscribe(async (params) => {
      try {
        const event = await this.storage.getDataEvent(params['id']);
        this.event = event;
      } catch (error) {
        this.backToList();
      }
    });
  }
  backToList() {
    this.router.navigateByUrl('tabs/list');
  }
}
