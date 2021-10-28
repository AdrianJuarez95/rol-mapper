import { Component, OnInit } from '@angular/core';
import { RolMap } from '../interfaces/rol-map';
import { ActivatedRoute, Router } from '@angular/router';
import { SavingService } from '../services/saving.service';

@Component({
  selector: 'app-rol-map',
  templateUrl: './rol-map.component.html',
  styleUrls: ['./rol-map.component.css']
})
export class RolMapComponent implements OnInit {
  rolMap: RolMap;
  idConfiguration= [];
  idWords = [[]];

  constructor(private route: ActivatedRoute, private router: Router, private savingService: SavingService) { }

  ngOnInit(): void {
    this.resetMap();

    this.route.data.subscribe(
      data => {
        this.rolMap = data.rolMap;
        this.createMap();
      },
      error => this.rolMap = null
    );

    console.log(this.idConfiguration + 'config');
    console.log(this.idWords);

    this.savingService.savingChanges$.subscribe(
      (saved: boolean) => {
        if (saved) {
          this.savingService.changesSaved();
          this.saveConfiguration();
        }
      }
    );
  }

  private resetMap(): void {
    this.rolMap = {
      rows: 0,
      columns: 0,
      configurationId: ''
    };
  }

  private createMap(): void {
    for(let i = 0; i < this.rolMap.rows; i++) {
      this.idConfiguration[i] = this.rolMap.configurationId.slice(i*this.rolMap.columns + 0, i*this.rolMap.columns + this.rolMap.columns);
      this.idWords[i] = this.idConfiguration[i].split('');
    }
  }

  changeSquare(words: string, emptyClass: string, totodileClass: string, treeckoClass: string, chimcharClass: string, enemyTextClass: string) {
    return {
      [emptyClass]: words === '0',
      [totodileClass]: words === '1',
      [treeckoClass]: words === '2',
      [chimcharClass]: words === '3',
      [enemyTextClass]: words === '4' || words === '5' || words === '6' || words === '7' || words === '8'
    };
  }

  saveConfiguration() {
    this.rolMap.configurationId = '';
    for (let word of this.idWords) {
      for (const id of word) {
        this.rolMap.configurationId += '' + id;
      }
    }
    console.log(this.rolMap.configurationId);

    this.router.navigate([`saved-map/${this.rolMap.rows}/${this.rolMap.columns}/${this.rolMap.configurationId}`]);
  }
}
