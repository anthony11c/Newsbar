import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Vijest } from '../models/vijest.model';
import { VijestService } from '../_services/vijest.service';

@Component({
  selector: 'app-add-vijest',
  templateUrl: './add-vijest.component.html',
  styleUrls: ['./add-vijest.component.css']
})
export class AddVijestComponent implements OnInit {

  vijest:Vijest = {
    naslov: '',
    kategorija: '',
    tekst_kratki: '',
    tekst_full: '',
    datum: '',
    slika: ''
  };

  isSuccessful = false;
  errorMessage = '';
  selectedKategorija = '';
  submitted = false;
  kategorije = [ 'Sport', 'Znanost', 'Politika'];

  constructor(private vijestService: VijestService) { }

  ngOnInit(): void {
  }

  saveVijest(): void {
    const data = {
      naslov: this.vijest.naslov,
      kategorija: this.selectedKategorija,
      tekst_kratki: this.vijest.tekst_kratki,
      slika: this.vijest.slika,
      tekst_full: this.vijest.tekst_full,
    };

    console.log(data);
    

    this.vijestService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newVijest(): void {
    this.submitted = false;
    this.vijest = {
      naslov: '',
      tekst_kratki: ''
    };
  }

}
