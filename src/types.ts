import { SafeResourceUrl } from "@angular/platform-browser";

export interface SignInResponse {
  isSuccessful: boolean;
  errorMsg: string | null;
  _id: string | null;
}

export interface SignUpResponse extends SignInResponse { }

export interface UserData {
  firstname: string;
  lastname: string;
  email: string;
}

export type TitleType = 'series' | 'movie';

export interface TitleItemRaw {
  id: string;
  title: string;
  genres: string,
  year: string,
  size: string,
  url: string;
  cover: {
    mimetype: string;
    url: string;
  }
}

export interface TitleItem {
  id: string;
  title: string;
  genres: string[],
  year: number,
  size: number,
  url: string;
  cover: {
    mimetype: string;
    url: string;
  }
}

export interface serverMovieData {
  _id: string;
  title: string;
  size: number;
  format: string;
  url: string;
  mimetype: string;
}

export interface pendingMovieData {
  cover: File | undefined;
  title: string | undefined;
  genres: string[] | undefined;
  year: string | undefined;
}
