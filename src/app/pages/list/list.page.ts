import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
  IonList,
  IonLabel,
  IonItem,
  IonText,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonListHeader,
  IonButton,
  IonAvatar,
  IonCardSubtitle,
  IonCardHeader,
  IonCard,
  IonCardContent,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { TabComponent } from '../../components/tab/tab.component';
import { Icon } from 'src/app/models/icon.model';
import { MenuButtonComponent } from '../../components/menu-button/menu-button.component';
import { MenuButton } from 'src/app/models/menu-button.model';
import { DataService } from 'src/app/services/data.service';
import {
  PhotographerResponse,
  Result,
} from 'src/app/models/PhotographerResponse.model';
import { switchMap } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';
import { EventCardComponent } from "../../components/event-card/event-card.component";
import { TabsPage } from "../../tabs/tabs.page";
import { IconComponent } from "../../components/icon/icon.component";

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
    standalone: true,
    imports: [
        IonCardTitle,
        IonCardContent,
        IonCard,
        IonCardHeader,
        IonCardSubtitle,
        IonAvatar,
        IonButton,
        IonListHeader,
        IonIcon,
        IonFabList,
        IonFabButton,
        IonFab,
        IonText,
        IonItem,
        IonLabel,
        IonList,
        IonRow,
        IonCol,
        IonGrid,
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        CommonModule,
        TabComponent,
        MenuButtonComponent,
        EventCardComponent,
        TabsPage,
        IconComponent
    ]
})
export class ListPage {
  private dataService = inject(DataService);
  private storage = inject(StorageService);

  scanIcon: Icon = {
    name: 'Scan',
    icon: 'assets/ic_camera.svg',
    path: '',
  };
  menuButtons: MenuButton[] = [
    {
      color: '#d99079',
      name: 'Program',
      icon: 'assets/ic_calendar.svg',
    },
    {
      color: '#989e9c',
      name: 'Artworks',
      icon: 'assets/ic_frame.svg',
    },
    {
      color: '#c2b782',
      name: 'Map',
      icon: 'assets/ic_pin.svg',
    },
  ];

  results: Result[] = [];
  constructor() {
    //this.dataService.getData().subscribe();

    /**test */
    this.storage.insertData();
  }
  ionViewWillEnter() {
    this.getResults();
  }

  async getResults() {
    this.results = await this.storage.loadData(environment.RESULTS);
  }
}
