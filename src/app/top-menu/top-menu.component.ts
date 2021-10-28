import { Component, OnInit, ViewChild } from '@angular/core';
import { SavingService } from '../services/saving.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
})
export class TopMenuComponent implements OnInit {

  constructor(private savingService: SavingService) { }

  ngOnInit(): void {
  }

  save() {
    this.savingService.saveChanges();
  }

}
