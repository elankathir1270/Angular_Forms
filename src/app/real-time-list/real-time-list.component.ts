import { Component, OnInit } from '@angular/core';
import { RealTimeService } from '../Services/real-time.service';
import { DbData } from '../Model/db-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-real-time-list',
  templateUrl: './real-time-list.component.html',
  styleUrls: ['./real-time-list.component.css'],
})
export class RealTimeListComponent implements OnInit {
  realTimeList: DbData[] = [];

  constructor(
    private realTimeService: RealTimeService,
    private route: Router
  ) {}

  ngOnInit() {
    this.realTimeList = this.realTimeService.getAllDatas();
  }

  update(id: string) {
    this.route.navigate([id]);
    //console.log(id);
  }
}
