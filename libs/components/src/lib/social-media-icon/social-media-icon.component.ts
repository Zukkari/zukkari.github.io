import { Component, Input, OnInit } from '@angular/core';
import SocialMediaIconModel from './social-media-icon.model';

@Component({
  selector: 'zuk-social-media-icon',
  templateUrl: './social-media-icon.component.html',
  styleUrls: ['./social-media-icon.component.scss'],
})
export class SocialMediaIconComponent implements OnInit {
  @Input() model!: SocialMediaIconModel;

  constructor() {}

  ngOnInit(): void {}
}
