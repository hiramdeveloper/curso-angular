import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  getPersonas (): string[] {
    return [
      'Hiram', 'Pedro', 'Juan', 'Pablo'
    ]
  }
}
