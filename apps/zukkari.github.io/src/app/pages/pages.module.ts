import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';


@NgModule({
  declarations: [],
  imports: [CommonModule, HomeModule, ContactModule],
  exports: [HomeModule],
})
export class PagesModule {}
