import { PokeShareInfoService } from './../poke-share-info.service';
import { PokeAPIServiceService } from './../poke-apiservice.service';
import { Pokemon, PokeDetail } from './../pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-compenent',
  templateUrl: './my-compenent.component.html',
  styleUrls: ['./my-compenent.component.css']
})
export class MyCompenentComponent implements OnInit {
  id!: string;
  pokes: Pokemon[] = [];
  selectedPokeId!: string;
  searchPokeName = '';
  providers!: [PokeAPIServiceService];
  pokeDetail!: PokeDetail;
  myDate!: Date;
  parseInt = parseInt;
  // tslint:disable-next-line: typedef
  toString(x: number){
    x.toString();
  }

  constructor(private pokeService: PokeAPIServiceService, private pokeShareInfoService: PokeShareInfoService) {

  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e: { name: string; url: string; }, index) => {
        this.pokes.push(new Pokemon('' + index, e.name, e.url));
      });
    });
  }

  // tslint:disable-next-line: typedef
  go() {
    // tslint:disable-next-line: triple-equals
    if (this.selectedPokeId != ''){
      // tslint:disable-next-line: deprecation
      this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe(data => {
        this.pokeDetail = data;
        this.pokeShareInfoService.setValue(this.selectedPokeId);
      });
    }
  }

}
