import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vijest } from '../models/vijest.model';
import { VijestService } from '../_services/vijest.service';

@Component({
  selector: 'app-clanak',
  templateUrl: './clanak.component.html',
  styleUrls: ['./clanak.component.css']
})
export class ClanakComponent implements OnInit {

  currentVijest: Vijest = {
    naslov: '',
    kategorija: '',
    tekst_kratki: '',
    tekst_full: '',
    slika: ''
  };

  constructor(private router: ActivatedRoute, private vijestService: VijestService,) { }

  ngOnInit(): void {
    this.getVijest(this.router.snapshot.params.id);
    console.log(this.router.snapshot.params);
    
  }

  getVijest(id: string): void {
    this.vijestService.get(id)
      .subscribe(
        data => {
          this.currentVijest = data;
          console.log("currentVijest:")
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
