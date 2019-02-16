import { Component, Input } from "@angular/core";
import { HeaderDataService } from './header-data.services';


@Component({
    selector:'cmail-header',
    templateUrl:'./header.component.html',
    styleUrls:[
        './header.component.css',
        './header-search.css'
    ]    
})
export class HeaderComponent{

    tituloPagina = 'E-mail box';
    private _ativaMenu = false;
    cor: string;
    @Input() titulo;    

    constructor(private headerDataService: HeaderDataService){

        this.headerDataService.listenHeaderSearchChanges()
        .subscribe((valor: string) => {
            this.cor = valor;
        })

    }

    toggleMenu(){
        
     this._ativaMenu = !this._ativaMenu;

    }

    //Propriedade -- boa prática
    get isMenuOpen(){
        return this._ativaMenu
    }

    handleInputSearch(valorInout: string){
        this.headerDataService.updateHeaderSearchValue(valorInout);
    }

}