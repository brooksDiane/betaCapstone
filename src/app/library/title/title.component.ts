import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { serverMovieData, TitleType } from 'src/types';
import { GetTitleService } from '../get-title.service';
import { setTimer } from 'src/utils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  id!: string;
  titleType!: TitleType;
  title: serverMovieData | null = null;
  apiURI = environment.apiURI;

  constructor(
    private route: ActivatedRoute,
    private getTitleService: GetTitleService
  ) { }

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
    this.getTitleService.getMovie(this.id).subscribe(async (data) => {
      this.title = null; //to reinitialize the video player.
      await setTimer(1); //apparently, it requires some time to pass to recognize data change and delete the element
      this.title = data;
      console.log(this.title);
    });
  }
}
