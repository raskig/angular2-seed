import {Component} from 'angular2/core';

@Component({
    selector: 'favorite',
    template: `
        <h1>FAVORITE?</h1>
    <i class="glyphicon"
    [class.glyphicon-star-empty]="!isFavorite"
    [class.glyphicon-star]="isFavorite"
    (click)="onClick()">
    </i>`
})
export class FavoriteComponent{
    isFavorite = false;
    onClick(){
        console.log("Clicked..");
        this.isFavorite = !this.isFavorite;
    }
}