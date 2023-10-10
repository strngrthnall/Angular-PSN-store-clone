import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu-bar-items',
  templateUrl: './menu-bar-items.component.html',
  styleUrls: ['./menu-bar-items.component.scss']
})
export class MenuBarItemsComponent implements OnInit {
  environment: any = environment;

  constructor() { }

  ngOnInit(): void {
  }

}
