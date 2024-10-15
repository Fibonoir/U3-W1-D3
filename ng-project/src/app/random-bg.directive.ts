import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRandomBg]'
})
export class RandomBgDirective {
  private tailwindClasses: string[] = [
    'bg-red-200',
    'bg-blue-200',
    'bg-green-200',
    'bg-yellow-200',
    'bg-purple-200',
    'bg-pink-200',
    'bg-indigo-200',
    'bg-teal-200',
    'bg-orange-200',
    'bg-gray-200',
    'bg-rose-200',
    'bg-emerald-200',
    'bg-cyan-200',
    'bg-lime-200',
    'bg-fuchsia-200',
    'bg-sky-200',
    'bg-violet-200',
    'bg-stone-200',
    'bg-zinc-200',
    'bg-neutral-200',
    'bg-amber-200'
  ];

  constructor(private el: ElementRef) {}


  private getRandomTailwindClass(): string {
    const randomIndex = Math.floor(Math.random() * this.tailwindClasses.length);
    return this.tailwindClasses[randomIndex];
  }

  @HostListener('mouseenter') onMouseEnter() {
    const randomClass = this.getRandomTailwindClass();
    this.el.nativeElement.classList.add(randomClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.tailwindClasses.forEach(className => {
      this.el.nativeElement.classList.remove(className);
    });
  }
}
