import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vijest } from '../models/vijest.model';
import { VijestService } from '../_services/vijest.service';


@Component({
  selector: 'app-vijest-details',
  templateUrl: './vijest-details.component.html',
  styleUrls: ['./vijest-details.component.css']
})
export class VijestDetailsComponent implements OnInit {

  currentVijest: Vijest = {
    naslov: '',
    kategorija: '',
    tekst_kratki: '',
    tekst_full: '',
    slika: ''
  };
  message = '';
  selectedKategorija = '';

  kategorije = [ 'Sport', 'Znanost', 'Politika'];

  constructor(
    private vijestService: VijestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getVijest(this.route.snapshot.params.id);
  }

  getVijest(id: string): void {
    this.vijestService.get(id)
      .subscribe(
        data => {
          this.currentVijest = data;
          this.selectedKategorija = this.currentVijest.kategorija!;
          console.log(this.selectedKategorija);
          console.log("currentVijest:")
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateVijest(): void {
    this.message = '';
    this.currentVijest.kategorija = this.selectedKategorija; 

    this.vijestService.update(this.currentVijest._id, this.currentVijest)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This vijest was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteVijest(): void {
    this.vijestService.delete(this.currentVijest._id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/vijesti']);
        },
        error => {
          console.log(error);
        });
  }
}
