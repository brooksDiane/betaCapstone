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
