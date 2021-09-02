import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { VijestService } from '../_services/vijest.service';
import { Vijest } from '../models/vijest.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  vijesti : Vijest[] = [];
  topVijest : Vijest = {};
  drugaVijest : Vijest = {};
  sportVijesti : Vijest[] = [];
  znanostVijesti : Vijest[] = [];
  politikaVijesti : Vijest[] = [];


  constructor(private vijestService: VijestService) { }

  ngOnInit(): void {
    this.vijestService.getAll().subscribe(
      data => { data.map( x => {
        x.kategorija;
        //console.log(x.kategorija);
        if(x.kategorija === 'Znanost'){
          if(this.znanostVijesti.length < 3){
            this.znanostVijesti.push(x);
          }
        } else if(x.kategorija === 'Sport'){
          this.sportVijesti.push(x);
        } else if(x.kategorija === 'Politika'){
          if(this.politikaVijesti.length < 3){
            this.politikaVijesti.push(x);
          }
      }})
        this.vijesti = data;
        console.log(data);
        this.topVijest = data[0];
        this.drugaVijest = data[1];

        console.log("Popularne vijesti iz znanosti:");
        console.log(this.znanostVijesti);
        console.log("Popularne vijesti iz sporta:");
        console.log(this.sportVijesti);
        console.log("Popularne vijesti iz politike:");
        console.log(this.politikaVijesti);
      },
      err => {
        this.vijesti = JSON.parse(err.error).message;
      }
    );
  }

}
