import { Component } from '@angular/core';

@Component({
  selector: 'zio-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent {
  contentDisplayDelay = 1_000;

  showSectionContent = false;

  displaySectionContent(): void {
    setTimeout(() => {
      this.showSectionContent = true;
    }, this.contentDisplayDelay);
  }
}
