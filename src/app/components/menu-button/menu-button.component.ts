import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
  imports:[CommonModule]
})
export class MenuButtonComponent {
  @Input() name: string = '';
  @Input() icon: string = '';
  @Input() color: string = '';

  constructor() {}
}
