import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { SocialMediaIconComponent } from './social-media-icon/social-media-icon.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProfileCardComponent, SocialMediaIconComponent],
  exports: [ProfileCardComponent, SocialMediaIconComponent],
})
export class ComponentsModule {}
