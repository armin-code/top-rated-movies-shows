import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { fromEvent, Subject, timer } from 'rxjs';
import { debounce, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appDelayedInput]'
})
export class DelayedInputDirective implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  delayTime = 1000;
  @Output() delayedInput = new EventEmitter<string>();

  constructor(private elementRef: ElementRef<HTMLInputElement>) {}

  ngOnInit() {
    fromEvent(this.elementRef.nativeElement, 'input')
      .pipe(
        debounce(() => timer(this.delayTime)),
        distinctUntilChanged(
          null,
          (event: Event) => (event.target as HTMLInputElement).value
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(e => {
        const value = (e.target as HTMLInputElement).value;
        this.delayedInput.emit(value);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
