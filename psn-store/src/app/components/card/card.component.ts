import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  price: string = 'Em breve'

  @Input()
  imageCover: string = '../../../assets/images/bt-5.jpg'

  @Input()
  showPanel: string = 'true'

  @Input()
  platforms: string = 'DIGITAL'

  @Input()
  label:string = 'Exclusive'

  @Input()
  originalPricing: string = 'R$ 179,99'

  @Input()
  inPromo: string = 'false'

  constructor() { }

  ngOnInit(): void {
  }

}
