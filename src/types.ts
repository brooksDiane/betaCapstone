export interface SignInResponse {
  isSuccessful: boolean;
  errorMsg: string | null;
  _id: string | null;
}

export interface SignUpResponse extends SignInResponse {}

export type TitleType = 'series' | 'movie';

export interface AsideTitleListItem {
  id: string;
  title: string;
  type?: TitleType;
}

export interface Movie {
  _id: string;
  title: string;
  size: number;
  format: string;
  url: string;
  mimetype: string;
}
