import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco = '';
  public numero = '';
  public complemento = '';
  public formaPagameto = '';

  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaDePagamentoValido: boolean;

  public enderecoEstadoPrimitivo = true;
  public numeroEstadoPrimitivo = true;
  public complementoEstadoPrimitivo = true;
  public formaPagamentoEstadoPrimitivo = true;

  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco: string): void {

    this.endereco = endereco;
    this.numeroEstadoPrimitivo = false;

    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;
    this.numeroEstadoPrimitivo = false;
    if (this.numero.length > 0) {
      this.numeroValido = true;

    } else {
      this.numeroValido = false;
    }
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;

    this.complementoEstadoPrimitivo = false;

    if (this.complemento.length > 0) {
      this.complementoValido = true;
    } else {
      this.complementoValido = false;
    }
  }

  public atualizaFromaPagamento(formaDePagemento: string): void {
    this.formaPagameto = formaDePagemento;
    this.formaPagamentoEstadoPrimitivo = false;
    if (this.formaPagameto.length > 0) {
      this.formaDePagamentoValido = true;
    } else {
      this.formaDePagamentoValido = false;
    }
  }

}
