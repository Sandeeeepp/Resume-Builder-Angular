import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { details } from './cv-templates/input-page-class';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

  defaultDetails!: details;

  show = new BehaviorSubject(true);
  routerDecider = new BehaviorSubject('');
  details = new BehaviorSubject<details>(this.defaultDetails);

  createCV = new BehaviorSubject('no');

  changeShow(param: boolean) {
    this.show.next(param);
  }

  changeRouterDecider(param: string) {
    this.routerDecider.next(param);
  }

  sendDetails(params: details) {
    this.details.next(params);
  }
}
