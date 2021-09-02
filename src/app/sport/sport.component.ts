import { Component, OnInit } from '@angular/core';
import { Vijest } from '../models/vijest.model';
import { VijestService } from '../_services/vijest.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  vijestiSport : Vijest[] = [];
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
        if(x.kategorija === 'Sport'){
            this.vijestiSport.push(x);
        }})
        this.topVijest = this.vijestiSport[this.vijestiSport.length - 1];
        this.vijestiSport.pop();
      },
      err => {
        this.vijestiSport = JSON.parse(err.error).message;
      }
    );
  }

}
