import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [RootComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [RootComponent],
})
export class HomeModule {
}
