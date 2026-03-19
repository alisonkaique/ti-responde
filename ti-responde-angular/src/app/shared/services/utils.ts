import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL: string = 'http://localhost:9090/rest99';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  private httpOptions = {};

  constructor(
    private http: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${btoa('totvs:!Senha@2025!')}`,
        tenantId: `99,01`
      })
    };
  }

  getProductGroups(page: number, pageSize: number): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/api/framework/v1/genericList?alias=SBM&fields=bm_grupo,bm_desc&order=bm_desc&page=${page}&pageSize=${pageSize}`, this.httpOptions);
  }

  postProductGroups(body: any): Observable<any> {
    return this.http.post(`${BASE_URL}/custom/ti/responde/sbm`, body, this.httpOptions);
  }

  getProductInfo(productId: string): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/api/framework/v1/genericList?alias=SB1&fields=b1_cod,b1_desc,b1_tipo&order=b1_desc&page=1&pageSize=1&filter=b1_cod eq '${productId}'`, this.httpOptions);
  }
}
