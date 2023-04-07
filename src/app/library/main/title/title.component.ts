import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, TitleType } from 'src/types';
import { TitleService } from '../../title.service';
import { setTimer } from 'src/utils';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  id!: string;
  titleType!: TitleType;
  title: Movie | null = null;

  constructor(
    private route: ActivatedRoute,
    private titleService: TitleService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.onUrlChange();
    });

    //this checks the type of media
    this.route.data.subscribe((url) => {
      this.titleType = url['titleType'];
    });
  }

  onUrlChange() {
    this.titleService.getMovie(this.id).subscribe(async (data) => {
      this.title = null; //to reinitialize the video player.
      await setTimer(1); //apparently, it requires some time to pass to recognize data change and delete the element
      this.title = data;
      console.log(this.title);
    });
  }
}
