import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsVO} from "../../../domain/news.vo";
import {AdminService} from "../../admin.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewComponent implements OnInit {
  news: NewsVO;

  constructor(private route: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const news_id = +params['news_id'];
      this.adminService.findOneNews(news_id)
        .subscribe((res: NewsVO) => {
          this.news = res;
        });
    }
  );
  }

}
