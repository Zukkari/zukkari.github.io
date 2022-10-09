import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';
import { NavigationItem } from './navigation.model';

@Component({
  selector: 'zio-navigation[navigationItems]',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  @Input() navigationItems: NavigationItem[] = [];

  constructor(private router: Router) {}

  isActive(navigationItem: NavigationItem): boolean {
    return this.router.isActive(navigationItem.link, this.exact());
  }

  private exact(): IsActiveMatchOptions {
    return {
      paths: 'exact',
      queryParams: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored',
    };
  }
}
