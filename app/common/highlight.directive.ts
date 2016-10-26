import { Directive, ElementRef, Renderer, Input, Output,HostListener,HostBinding } from '@angular/core';

@Directive({ selector: '[hightlight]' })
export class HighlightDirectieve {
   
    @Input() hightlight: string;

    @Input() set defaultColor(colorName: string) {
        this.hightlight = colorName||this.hightlight;
    }
   
   @HostListener('mouseenter') onmouseenter(){
       this.highColor(this.hightlight);
   }

   @HostListener('mouseleave') onmouseleave(){
         this.highColor();
   }
  
   
    constructor(
        public ref: ElementRef,
        public render: Renderer
    ) {
       // this.highColor();
    }

    highColor(color?:string) {
        this.render.setElementStyle(this.ref.nativeElement, 'backgroundColor',color);
    }
}