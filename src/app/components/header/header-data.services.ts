import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class HeaderDataService{

    mudancasNoValorDaBusca: EventEmitter<string> = new EventEmitter();

    constructor(){}

    updateHeaderSearchValue(valorDaBusca){

        this.mudancasNoValorDaBusca.emit(valorDaBusca);

    }

    listenHeaderSearchChanges(){
        return this.mudancasNoValorDaBusca;
    }




}