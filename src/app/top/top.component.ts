import { Component, OnInit } from '@angular/core';
import {NzPlacementType} from 'ng-zorro-antd';
import {Location} from '@angular/common';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  constructor(
    private location:Location
  ) { }


  ngOnInit(): void {
  }

  goBack() {
    this.location.back()
  }
}
