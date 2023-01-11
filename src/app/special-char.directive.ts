import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpecialChar]'
})
export class SpecialCharDirective {
regex = /[^a-zA-Z0-9 ]/g
  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: any){
    event.target.value = this.el.nativeElement.value.replace(this.regex, '')
  }

}
