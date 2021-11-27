import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProfileInfoServiceService } from './service/profile-info-service.service';
import { ProfileInformation } from './service/profile-information';

@Component({
  selector: 'zuk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'zuk';

  model: ProfileInformation;

  private componentDestroyed$ = new Subject();

  constructor(private profileInfoService: ProfileInfoServiceService) {}

  ngOnInit(): void {
    this.profileInfoService
      .getProfileInfo()
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((info) => (this.model = info));
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(null);
    this.componentDestroyed$.complete();
  }
}
