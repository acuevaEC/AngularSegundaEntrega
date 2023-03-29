import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorNotas]'
})
export class ColorNotasDirective {

  
  constructor(public elementRef: ElementRef, public renderer2: Renderer2) { 
    const elementoHTML = this.elementRef.nativeElement;
    renderer2.setStyle(elementoHTML,'border-radius','1px');
    renderer2.setStyle(elementoHTML,'background-color','green');

  }
  
}

