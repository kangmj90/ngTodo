import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NewsVO} from "../../../domain/news.vo";
import {MatSnackBar} from "@angular/material";
import {AdminService} from "../../admin.service";

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WriteComponent implements OnInit {
  news = new NewsVO();
  fileList: FileList; // 선언

  constructor(private  snackBar: MatSnackBar, private adminService: AdminService) { }

  ngOnInit() {
  }

  addNews() {
// snackbar 구현부
    if (!this.news.title) {
      // let config: MatSnackBarConfig = new MatSnackBarConfig();
      // config.duration = 3000;
      this.snackBar.open('제목을 입력하세요.', null,  {duration: 3000});
      return;
    }
    if (!this.news.content) {
      // let config: MatSnackBarConfig = new MatSnackBarConfig();
      // config.duration = 3000;
      this.snackBar.open('내용을 입력하세요.', null,  {duration: 3000});
      return;
    }

    this.adminService.addNews(this.news)
      .subscribe(res => {
        // result 가 0이면 성공 스낵바 띄우고 이전 페이지로 이동
        this.snackBar.open('', null, null);
      });
//     this.adminService.addNews(this.news)
//       .then(res => {
//       });
  }

  fileChange(event: any) {
    this.fileList = event.target.files;
    console.log(this.fileList);
// show thumbnail
    const reader = new FileReader();
    reader.readAsDataURL((this.fileList[0]));
    reader.onload = () => {
// this.thumbnailSrc = reader.result;
      this.imageUpload();
    };
  }

  imageUpload() {
    const formData: FormData = new FormData();
    if (this.fileList && this.fileList.length > 0) {
      const file: File = this.fileList[0];
      formData.append('file', file, file.name);
    }
    this.adminService.imageUpload(formData)
      .subscribe(res => {
        if (res['result'] === 0) {
// 이미지 경로를 editor에 추가한다.
          console.log(res['value']);
          if (this.news.content) {
            this.news.content += `<img src="http://www.javabrain.kr${res['value']}
style="max-width: 100%;"">`;
          } else {
            this.news.content = `<img src="http://www.javabrain.kr${res['value']}"
style="max-width: 100%;">`;
          }
        }
      });
  }

}
