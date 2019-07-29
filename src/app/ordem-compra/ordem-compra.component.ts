import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from './../ordem-compra.service';
import { Pedido } from './../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number;

  public pedido: Pedido = new Pedido('', '', '', '');

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

  public formEstado = 'disabled';

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {


  }

  public atualizaEndereco(endereco: string): void {

    this.endereco = endereco;
    this.enderecoEstadoPrimitivo = false;

    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
    this.habilitaForm();
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;
    this.numeroEstadoPrimitivo = false;
    if (this.numero.length > 0) {
      this.numeroValido = true;

    } else {
      this.numeroValido = false;
    }
    this.habilitaForm();
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

  public atualizaFromaPagamento(formaDePagamento: string): void {

    this.formaPagameto = formaDePagamento;
    this.formaPagamentoEstadoPrimitivo = false;
    if (this.formaPagameto !== 'Selecione uma opção') {
      this.formaDePagamentoValido = true;
    } else {
      this.formaDePagamentoValido = false;
    }
    this.habilitaForm();
  }

  public habilitaForm(): void {

    if (this.enderecoValido === true && this.numeroValido === true && this.formaDePagamentoValido === true) {
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }
  }

  public confirmarCompra(): void {

    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagameto;
    this.ordemCompraService.efetivarCompra(this.pedido).subscribe((idPedidoCompra: number) => {
      this.idPedidoCompra = idPedidoCompra;
    });
  }

}
