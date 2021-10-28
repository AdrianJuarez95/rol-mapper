import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RolMap } from '../interfaces/rol-map';

@Injectable({
  providedIn: 'root'
})
export class RolMapResolve implements Resolve<RolMap> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RolMap> {
        const rows = +route.params.rows;
        const columns = +route.params.columns;
        const configurationId = '' + route.params.configurationId;
        const rolMap = {
          rows,
          columns,
          configurationId
        };

        return of(rolMap);
  }

}
