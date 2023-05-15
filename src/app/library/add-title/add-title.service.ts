import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { environment } from 'src/environments/environment';
import { pendingMovieData } from 'src/types';
import { GetTitleService } from '../get-title.service';
import { Router } from '@angular/router';

@Injectable()
export class AddTitleService {
  constructor(private http: HttpClient, private authService: AuthService, private getTitleService: GetTitleService, private router: Router) { }

  data: pendingMovieData = {
    title: undefined,
    genres: undefined,
    year: undefined,
    cover: undefined,
  };

  file: File | undefined;

  addMovie() {
    const formData = new FormData();
    formData.append('file', this.file!);
    formData.append('title', this.data.title!);
    formData.append('genres', JSON.stringify(this.data.genres!));
    formData.append('year', this.data.year!);
    console.log('Step 1: send data to the api ', formData);

    this.http
      .post(environment.apiURI + 'add-movie/' + this.authService._id, formData)
      .subscribe((data: any) => {
        console.log(data);
        if (data.successful) {
          console.log('Step 5: got data back');
          this.addCover(data._id);
        }
      });
  }

  addCover(movieId: string) {
    const formData = new FormData();
    formData.append('file', this.data.cover!);
    console.log('Step 6: Sent Cover', formData);

    this.http
      .put(environment.apiURI + 'add-cover/' + movieId, formData)
      .subscribe((response) => {
        console.log('Step10: Got the final response', response)
        this.getTitleService.isTitleUpdated = true;
        this.router.navigate(['lib'])
      }
      );
  }
}
