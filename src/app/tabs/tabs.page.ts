import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel, IonGrid, IonCol, IonRow, IonSkeletonText, IonText } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { TabComponent } from "../components/tab/tab.component";
import { Icon } from '../models/icon.model';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss'],
    standalone: true,
    imports: [IonText, IonSkeletonText, IonRow, IonCol, IonGrid, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, CommonModule, TabComponent]
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  rutas: Icon[] = [
    {
      name: 'Scan',
      path: 'list',
      icon: "assets/ic_camera.svg",
    },
    {
      name: 'Festivals',
      path: '',
      icon: "assets/ic_eye.svg",
    },
    {
      name: 'News',
      path: '',
      icon: "assets/ic_megaphone.svg",
    },
    {
      name: 'Favs',
      path: '',
      icon: "assets/ic_heart.svg",
    },
  ];
constructor(){}


}
