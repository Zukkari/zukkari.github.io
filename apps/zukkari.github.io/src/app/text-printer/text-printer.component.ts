import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, finalize, interval, Observable, scan, Subject, switchMap, takeUntil, zip, } from 'rxjs';

@Component({
  selector: 'zio-text-printer',
  templateUrl: './text-printer.component.html',
  styleUrls: ['./text-printer.component.scss'],
})
export class TextPrinterComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() cursor = "_";
  @Input() cursorDelay = 2_000;

  @Input() delay = 15;

  @ViewChild('content')
  element!: ElementRef;

  showCursor = true;

  characters$ = new BehaviorSubject<string[]>([]);
  printedText$!: Observable<string>;
  componentDestroyed$ = new Subject();

  @Output() printComplete$ = new EventEmitter<void>();

  ngOnInit(): void {
    this.printedText$ = this.characters$.pipe(
      switchMap((characters) =>
        zip([characters, interval(this.delay)], (first, _second) => first).pipe(
          scan((acc, curr) => {
            return acc + curr;
          }),
          takeUntil(this.componentDestroyed$)
        )
      ),
      finalize(() => this.printComplete$.next()),
      takeUntil(this.componentDestroyed$)
    );

    this.printComplete$.subscribe(() => {
      setTimeout(() => {
        this.showCursor = false;
      }, this.cursorDelay);
    });
  }

  ngAfterViewInit() {
    const element = this.element.nativeElement;
    const text: string[] = element.innerText.split('');
    element.innerText = null;
    this.characters$.next(text);
    this.characters$.complete();
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(null);
    this.componentDestroyed$.complete();
  }
}
