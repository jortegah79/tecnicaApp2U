import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-tab',
  standalone: true,
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input() name: string = '';
  @Input() icon: string = '';
}
