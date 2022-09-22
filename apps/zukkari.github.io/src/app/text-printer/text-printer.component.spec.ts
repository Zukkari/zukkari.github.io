import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPrinterComponent } from './text-printer.component';

describe('TextPrinterComponent', () => {
  let component: TextPrinterComponent;
  let fixture: ComponentFixture<TextPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextPrinterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
