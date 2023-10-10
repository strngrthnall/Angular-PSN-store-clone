import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  environment: any = environment;

  constructor() { }

  ngOnInit(): void {
  }

}
