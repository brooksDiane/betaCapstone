export interface SignInResponse {
  isSuccessful: boolean;
  errorMsg: string | null;
  _id: string | null;
}

export interface SignUpResponse extends SignInResponse { }

export type TitleType = 'series' | 'movie';

export interface TitlePresentationItem {
  id: string;
  title: string;
  genres: string[] | string,
  year: number | string,
  size: number | string,
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
