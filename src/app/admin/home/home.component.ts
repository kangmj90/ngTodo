import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AdminService} from "../admin.service";
import {ResultVo} from "../../domain/result.vo";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.findNews();
  }

  findNews() {
    // Observe 사용
    const page = {start_index: 0, page_size: 5};
    this.adminService.findNews(page)
      .subscribe((data: ResultVo) => console.log(data));
  }
}
