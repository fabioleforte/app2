import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { URL_API } from './app.api';
import { Pedido } from './shared/pedido.model';

@Injectable()
export class OrdemCompraService {

  constructor(private http: Http) { }

  public efetivarCompra(pedido: Pedido): Observable<number> {

    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http.post(
      `${URL_API}/pedidos`,
      JSON.stringify(pedido),
      new RequestOptions({ headers: headers })
    )
      .map((resposta: Response) => resposta.json().id);
  }
}