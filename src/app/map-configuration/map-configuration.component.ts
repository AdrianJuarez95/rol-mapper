import { Component, OnInit } from '@angular/core';
import { RolMap } from '../interfaces/rol-map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-configuration',
  templateUrl: './map-configuration.component.html',
  styleUrls: ['./map-configuration.component.css']
})
export class MapConfigurationComponent implements OnInit {
  rolMap: RolMap;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  private resetForm(): void {
    this.rolMap = {
      rows: 0,
      columns: 0,
      configurationId: ''
    };
  }

  sendConfiguration(): void {
    if(this.rolMap.rows*this.rolMap.columns != this.rolMap.configurationId.length && this.rolMap.rows*this.rolMap.columns > 0){
      let conf = '';
      for(let i = 0; i < this.rolMap.rows*this.rolMap.columns; i++){
        conf += '0';
      }
      this.router.navigate([`map/${this.rolMap.rows}/${this.rolMap.columns}/${conf}`]);
    } else if(this.rolMap.rows*this.rolMap.columns === this.rolMap.configurationId.length){
      this.router.navigate([`map/${this.rolMap.rows}/${this.rolMap.columns}/${this.rolMap.configurationId}`]);
    }
  }

}
