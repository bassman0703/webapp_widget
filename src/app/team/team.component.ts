import { Component, OnInit } from '@angular/core';
import {NzButtonSize} from 'ng-zorro-antd';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }
  size: NzButtonSize = 'large';
  ngOnInit(): void {
  }

}
