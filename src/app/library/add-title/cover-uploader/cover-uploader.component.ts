import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AddTitleService } from '../add-title.service';

@Component({
  selector: 'app-cover-uploader',
  templateUrl: './cover-uploader.component.html',
  styleUrls: ['./cover-uploader.component.css'],
})
export class CoverUploaderComponent implements OnInit, AfterViewInit {
  fileElement!: HTMLInputElement;
  buttonText = 'Choose Cover';
  buttonColor = '';
  cover!: File;

  constructor(private addTitle: AddTitleService) { }

  ngAfterViewInit(): void {
    this.fileElement = document.querySelector('[type=file]')!;
  }

  selectFile() {
    if (this.fileElement.files instanceof FileList) {
      this.cover = this.fileElement.files[0];
      this.addTitle.data.cover = this.cover;
      this.buttonText = 'Cover Chosen';
      this.buttonColor = 'accent';
    } else {
      console.error(
        'There are no files selected | There is some other error here'
      );
    }
  }

  ngOnInit(): void { }
}
