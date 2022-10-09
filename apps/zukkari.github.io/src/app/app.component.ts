import { Component } from '@angular/core';
import { NavigationItem } from './components/navigation/navigation.model';

@Component({
  selector: 'zio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'zukkari.github.io';

  get pages(): NavigationItem[] {
    return [
      {
        link: '',
        title: 'Home',
      },
      {
        link: 'contact',
        title: 'Contact',
      },
    ];
  }
}
