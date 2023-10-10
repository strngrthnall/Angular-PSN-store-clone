import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.scss']
})
export class CardPricingComponent implements OnInit {

  @Input()
  gameType:string = 'DIGITAL PS4'

  @Input()
  gamePrice:string = 'R$ 129,99'

  @Input()
  gameOriginalPrice: string = 'R$ 138,99'

  @Input()
  inPromo: string = 'false'
  hide: string = 'hidden'

  constructor() { }

  ngOnInit(): void {
    if(this.inPromo === 'true') {
      this.hide = ''
    }
  }

}
