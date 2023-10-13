import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  environment: any = environment
  hidden:boolean = true
  gamesHidden = 'hidden'
  buttonHidden = ''


  constructor() { }

  ngOnInit(): void {
  }

  hide(): void {
    if(this.hidden == true) {
      this.hidden = false
      this.gamesHidden = ''
      this.buttonHidden = 'hidden'
    }
  }

}
