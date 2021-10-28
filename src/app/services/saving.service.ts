import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavingService {
  private saved = false;
  savingChanges$ = new EventEmitter<boolean>();

  constructor() { }

  saveChanges(): void {
    this.saved = true;
    this.savingChanges$.emit(this.saved);
  }

  changesSaved(): void {
    this.saved = false;
    this.savingChanges$.emit(this.saved);
  }
}
