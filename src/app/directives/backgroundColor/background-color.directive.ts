import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  constructor(private element: ElementRef) { }

  @HostListener('click') onClick(): void {
    this.element.nativeElement.style = 'background-color: red;';
    // this.element.nativeElement.style = 'font-size: 50px;';
  }

}
