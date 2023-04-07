import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleType } from 'src/types';
import { TitleService } from '../../title.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  id!: string;
  titleType!: TitleType;
  title = {
    // mimetype: 'video/mp4',
    // url: 'https://res.cloudinary.com/solibra/video/upload/v1680697699/vsbncuaeqxumoudlxoby.mp4',
    mimetype: '',
    url: '',
  };

  constructor(
    private route: ActivatedRoute,
    private titleService: TitleService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    //this checks the type of media
    this.route.data.subscribe((url) => {
      this.titleType = url['titleType'];
    });

    this.titleService
      .getMovie(this.id)
      .subscribe((data) => (this.title = data));

    setTimeout(() => console.log(this.title), 3000);
  }

  // ngAfterViewChecked(): void {
  //   this.titleService
  //     .getMovie(this.id)
  //     .subscribe((data) => (this.title = data));

  //   setTimeout(() => console.log(this.title), 3000);
  // }
}
