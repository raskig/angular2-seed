import {Component} from 'angular2/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html'
})
export class FavoriteComponent{
    isFavorite = false;
    onClick(){
        console.log("Clicked..");
        this.isFavorite = !this.isFavorite;
    }
}