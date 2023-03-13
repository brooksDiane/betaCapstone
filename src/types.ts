export interface SignInResponse {
  isSuccessful: boolean;
  errorMsg: string | null;
  _id: string | null;
}

export interface SignUpResponse extends SignInResponse {}
