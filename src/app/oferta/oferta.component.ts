import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;
  constructor(private route: ActivatedRoute, private ofertaservice: OfertasService) { }

  ngOnInit() {

    this.route.params.subscribe((parametros: Params) => {
      this.ofertaservice.getOfertaPorId(parametros.id)
        .then((ofertas: Oferta) => {
          this.oferta = ofertas;
        });
    });
  }

}
