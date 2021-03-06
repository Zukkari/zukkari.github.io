import { Component, Input, OnInit } from '@angular/core';
import { ProfileCardModel } from './profile-card.model';

@Component({
  selector: 'zuk-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  @Input() model!: ProfileCardModel;

  constructor() {}

  ngOnInit(): void {}
}
