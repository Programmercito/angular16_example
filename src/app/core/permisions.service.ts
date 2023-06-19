import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermisionsService {
  public puede: boolean = false;
  constructor() {

  }
  public dale() {
    this.puede = true;
  }
  canActivate(): boolean {
    return this.puede;
  }
}
