import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[appOutside]'
})
export class OutsideDirective {
  
@Output() appOutside = new EventEmitter(); 
  constructor(private eleRef:ElementRef){}
  @HostListener('document:click', ['$event'])
  public onClick(event) {
      const clickedInside = this.eleRef.nativeElement.contains(event.target);
      console.log('isClicked',event);
      
      if (!clickedInside) {
          this.appOutside.emit('outside');
      }
  }

}
