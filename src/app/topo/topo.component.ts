import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Subject } from 'rxjs/Subject';
import '../util/rxjs-extensions';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  public ofertas2: Oferta[];
  private subjectPesquisa: Subject<string> = new Subject();

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((termo: string) => {
        console.log('Requisação http para api: ', termo);
        if (termo.trim() === '') {
          return Observable.of<Oferta[]>([]);
        }
        return this.ofertaService.pesquisaOfertas(termo);
      })
      .catch((err: any) => {
        console.log(err);
        return Observable.of<Oferta[]>([]);
      })

    this.ofertas.subscribe((ofertas: Oferta[]) => {

      this.ofertas2 = ofertas;
    });
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('Keyup caracter: ', termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca);
  }

}
