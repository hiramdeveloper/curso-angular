import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit, OnDestroy {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.snapshot.params['id'];
    console.log(this.router.snapshot.params['id']);
    console.log('Persona inicia');
  }

  ngOnDestroy(): void {
    console.log('Persona finaliza');
  }

}
