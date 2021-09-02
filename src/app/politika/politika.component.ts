import { Component, OnInit } from '@angular/core';
import { Vijest } from '../models/vijest.model';
import { VijestService } from '../_services/vijest.service';

@Component({
  selector: 'app-politika',
  templateUrl: './politika.component.html',
  styleUrls: ['./politika.component.css']
})
export class PolitikaComponent implements OnInit {

  vijestiPolitika : Vijest[] = [];
  topVijest : Vijest = {};

  constructor(private vijestService: VijestService) { }

  ngOnInit(): void {
    this.dohvatiVijesti();
  }

  dohvatiVijesti(): void {
    this.vijestService.getAll().subscribe(
      data => { data.map( x => {
        x.kategorija;
        //console.log(x.kategorija);
        if(x.kategorija === 'Politika'){
            this.vijestiPolitika.push(x);
        }})
        this.topVijest = this.vijestiPolitika[this.vijestiPolitika.length - 1];
        this.vijestiPolitika.pop();
      },
      err => {
        this.vijestiPolitika = JSON.parse(err.error).message;
      }
    );
  }
}
