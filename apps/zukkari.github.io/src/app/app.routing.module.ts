import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { RootComponent } from './pages/home/root/root.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
