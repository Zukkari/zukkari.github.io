import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { TextPrinterComponent } from './text-printer/text-printer.component';



@NgModule({
  declarations: [NavigationComponent, TextPrinterComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationComponent, TextPrinterComponent],
})
export class ComponentsModule {}
