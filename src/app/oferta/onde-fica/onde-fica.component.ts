import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from './../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica = '';

  constructor(private route: ActivatedRoute, private ofertaService: OfertasService) { }

  ngOnInit() {
    // console.log('Id da rota pai', this.route.parent.snapshot.params['id']);
    this.ofertaService.getOndeFicaPorId(this.route.parent.snapshot.params['id'])
    .then((descriacao: string) => {
      this.ondeFica = descriacao;
    });
  }

}
