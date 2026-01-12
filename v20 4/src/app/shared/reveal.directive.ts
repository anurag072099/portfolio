import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  private io?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('reveal');

    this.io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          node.classList.add('in');
          this.io?.disconnect();
        }
      }
    }, { threshold: 0.16 });

    this.io.observe(node);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
