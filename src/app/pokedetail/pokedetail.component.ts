import { PokeDetail } from './../pokemon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css']
})
export class PokedetailComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('detail')
  detail!: PokeDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
