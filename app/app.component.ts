import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";
import {FavoriteComponent} from "./favorite.component";



@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular</h1><courses></courses> <authors></authors>' +
    '<favorite [is-favorite]="[post.isFavorite]" (favorite-change-event)="onFavoriteChange($event)"></favorite>',
    directives:[CoursesComponent, AuthorsComponent, FavoriteComponent]
})
export class AppComponent {
    post = {
        title: "App component main Tittle",
        isFavorite: true
    }

    onFavoriteChange($event){
        console.log( $event);
    }
}