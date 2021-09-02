import { Component, OnInit } from '@angular/core';
import { Vijest } from '../models/vijest.model';
import { VijestService } from '../_services/vijest.service';

@Component({
  selector: 'app-znanost',
  templateUrl: './znanost.component.html',
  styleUrls: ['./znanost.component.css']
})
export class ZnanostComponent implements OnInit {

  vijestiZnanost : Vijest[] = [];
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
        if(x.kategorija === 'Znanost'){
            this.vijestiZnanost.push(x);
        }})
        this.topVijest = this.vijestiZnanost[this.vijestiZnanost.length - 1];
        this.vijestiZnanost.pop();
      },
      err => {
        this.vijestiZnanost = JSON.parse(err.error).message;
      }
    );
  }

}
