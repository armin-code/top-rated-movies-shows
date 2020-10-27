import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { fromEvent, Subject, timer } from 'rxjs';
import { debounce, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appDelayedInput]'
})
export class DelayedInputDirective implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  delayTime = 1000;
  @Output() delayedInput = new EventEmitter<string>();

  constructor(private elementRef: ElementRef<HTMLInputElement>) {}

  ngOnInit(): void {
    fromEvent(this.elementRef.nativeElement, 'input')
      .pipe(
        debounce(() => timer(this.delayTime)),
        takeUntil(this.destroy$)
      )
      .subscribe(e => {
        this.delayedInput.emit((e.target as HTMLInputElement).value);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
