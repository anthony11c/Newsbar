import { Component, OnInit } from '@angular/core';
import { Vijest } from '../models/vijest.model';
import { VijestService } from '../_services/vijest.service';

@Component({
  selector: 'app-vijesti-list',
  templateUrl: './vijesti-list.component.html',
  styleUrls: ['./vijesti-list.component.css']
})
export class VijestiListComponent implements OnInit {

  vijesti?: Vijest[];
  currentVijest: Vijest = {};
  currentIndex = -1;
  title = '';
  vijestId = '';


  constructor(private vijestService: VijestService) { }

  ngOnInit(): void {
    this.retrieveVijesti();
  }

  retrieveVijesti(): void {
    this.vijestService.getAll()
      .subscribe(
        data => {
          this.vijesti = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveVijesti();
    this.currentVijest = {};
    this.currentIndex = -1;
  }

  setActiveVijest(vijest: Vijest, index: number): void {
    this.currentVijest = vijest;
    this.currentIndex = index;
    console.log("Označena vijest:");
    console.log(this.currentVijest);
    console.log("Index:" + index);
    console.log("id vijesti iz baze:" + this.currentVijest._id);
  }

  removeAllVijesti(): void {
    this.vijestService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentVijest = {};
    this.currentIndex = -1;

    this.vijestService.findByTitle(this.title)
      .subscribe(
        data => {
          this.vijesti = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
