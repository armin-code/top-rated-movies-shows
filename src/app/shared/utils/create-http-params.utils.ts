import { HttpParams } from '@angular/common/http';
export function createHttpParams(queryParams: any): HttpParams {
  let params = new HttpParams();
  Object.keys(queryParams).forEach(key => {
    if (
      queryParams[key] !== null &&
      queryParams[key] !== undefined &&
      queryParams[key] !== ''
    ) {
      params = params.append(key, queryParams[key]);
    }
  });
  return params;
}
