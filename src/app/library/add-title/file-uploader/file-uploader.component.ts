import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AddTitleService } from '../add-title.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css'],
})
export class FileUploaderComponent implements OnInit, AfterViewInit {
  fileElement!: HTMLInputElement;
  file!: File;
  title!: string;

  constructor(private addTitle: AddTitleService) {}

  ngAfterViewInit(): void {
    this.fileElement = document.querySelector('#file-field')!;
  }

  confirm() {
    if (this.fileElement.files instanceof FileList) {
      this.file = this.fileElement.files[0];
      this.addTitle.file = this.file;
      console.log(this.file);
    } else {
      console.error(
        'There are no files selected | There is some other error here'
      );
    }
  }

  ngOnInit(): void {}
}
