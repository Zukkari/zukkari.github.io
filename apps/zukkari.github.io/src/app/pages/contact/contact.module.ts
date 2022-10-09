import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ComponentsModule],
})
export class ContactModule {}
