import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.scss']
})
export class CardLabelComponent implements OnInit {
  @Input()
  gameLabel: string = ''

  @Input()
  switch:string = 'true'
  classShow:string = ''

  constructor() { }

  ngOnInit(): void {
    this.diplaySwitcher(this.switch)
  }

  diplaySwitcher(switcher:string) {
    if(switcher === 'false') {
      this.classShow = 'hide'
    }
  }

}
