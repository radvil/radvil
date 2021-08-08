import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[raxWrapper]'
})
export class RaxWrapper implements AfterViewInit {
  constructor(private rd: Renderer2, private elRef: ElementRef<HTMLElement>) {}

  @Input('raxWrapper') wrapperType: 'basic' | 'terminal' = 'basic';

  ngAfterViewInit(): void {
    if (this.wrapperType === 'terminal') {
      const host = this.elRef.nativeElement;
      this.rd.setStyle(host, 'padding', '1rem');
      this.rd.setStyle(host, 'background-color', '#000000bb');
      this.rd.setStyle(host, 'backdrop-filter', 'blur(7px)');
    }
  }
}