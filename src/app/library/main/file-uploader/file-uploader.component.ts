import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TitleService } from '../../title.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css'],
})
export class FileUploaderComponent implements OnInit, AfterViewInit {
  fileElement!: HTMLInputElement;
  file!: File;
  title!: string;

  constructor(private titleService: TitleService) {}

  ngAfterViewInit(): void {
    this.fileElement = document.querySelector('[type=file]')!;
  }

  uploadMovie() {
    if (this.fileElement.files instanceof FileList) {
      this.file = this.fileElement.files[0];
      console.log(this.file);
      this.titleService.addMovie(this.file, this.title);
    } else {
      console.error(
        'There are no files selected | There is some other error here'
      );
    }
  }

  ngOnInit(): void {}
}
