import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService, CarrinhoService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;
  constructor(
    private route: ActivatedRoute,
    private ofertaservice: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {

    this.route.params.subscribe((parametros: Params) => {
      this.ofertaservice.getOfertaPorId(parametros.id)
        .then((ofertas: Oferta) => {
          this.oferta = ofertas;
        });
    });

    console.log('Oferta array de itens do carrinho ', this.carrinhoService.exibirItens());
  }

  public adicionarItemCarrinho(): void {

    this.carrinhoService.incluirItem(this.oferta);
  }

}
