import { Component } from '@angular/core';

@Component({
  selector: 'zio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'zukkari.github.io';

  contentDisplayDelay = 1_000;

  showSectionContent = false;

  displaySectionContent(): void {
    setTimeout(() => {
      this.showSectionContent = true;
    }, this.contentDisplayDelay);
  }
}
