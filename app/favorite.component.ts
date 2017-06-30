import {Component, Input} from 'angular2/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html'
})
export class FavoriteComponent{
    @Input('is-favorite') isFavorite = false;
    onClick(){
        console.log("Clicked..");
        this.isFavorite = !this.isFavorite;
    }
}