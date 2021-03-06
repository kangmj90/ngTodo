import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AdminService} from "../admin.service";
import {NewsVO} from "../../domain/news.vo";
import {PageVO} from "../../domain/page.vo";
import {ResultVo} from "../../domain/result.vo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {
  newsList = new Array<NewsVO>();
  page = new PageVO(0, 5);

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.findNews();
  }

  findNews() {
    const page = {
      start_index: this.page.pageIndex *  this.page.pageSize, page_index: this.page.pageSize
    };
    this.adminService.findNews(page)
      .subscribe((result: ResultVo) => {
        this.newsList = result.data;
        this.page.totalCount = result.total;
      });
  }

  pageChanged(event: any) {
    this.page.pageIndex = event.pageIndex;
    this.page.pageSize = event.pageSize;
    this.findNews();
  }

  gotoView(news: NewsVO) {
    this.router.navigateByUrl(`/admin/news/view/${news.news_id}`);
  }

  gotoWrite() {
    this.router.navigateByUrl("/admin/news/write");
  }
}
