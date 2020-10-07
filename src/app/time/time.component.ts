import {Component, OnInit} from '@angular/core';
import {NzButtonSize} from 'ng-zorro-antd';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  constructor() {
  }

  panels = [
    {
      active: true,
      disabled: false,
      name: 'Morning',
      childPannel: [
        {
          active: false,
          disabled: true,
          name: 'This is panel header 1-1'
        }
      ]
    },
  ];
  size: NzButtonSize = 'large';


  ngOnInit(): void {
  }

}
