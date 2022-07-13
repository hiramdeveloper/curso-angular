import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, fromEvent, debounceTime, interval, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  obsOf$ = of(
    this.functionOne(),
    this.functionTwo(),
    this.functionThree(),
    4,
    5);

  fromEvent$ = fromEvent<PointerEvent>(document, 'click').pipe(
    map((evento) => `coordenadas: x: ${evento.clientX} - y: ${evento.clientY}`)
  );

  debounceTime$ = fromEvent<PointerEvent>(document, 'click').pipe(
    debounceTime(3000),
    map((value) => value.clientY)
  );

  obsInterval$ = interval(1000);

  constructor() { }

  ngOnInit(): void {
    this.subscription.add(
      this.obsOf$.subscribe({
        next: (value) => {console.log(value)}
      })
    )
    

    this.subscription.add(
      this.fromEvent$.subscribe({
        next: (value) => console.log(value)
      })
    )
    

    this.subscription.add(
      this.debounceTime$.subscribe({
        next: (value) => console.log(value)
      })
    )
    

    this.subscription.add(
      this.obsInterval$.subscribe({
        next: (value) => console.log(value)
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  stopObservable() {
    this.subscription.unsubscribe();
  }

  functionOne() {
    return 1;
  }

  functionTwo() {
    return 2;
  }

  functionThree() {
    return 3;
  }

}
