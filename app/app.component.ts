import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";
import {FavoriteComponent} from "./favorite.component";
import {HeartComponent} from "./heart.component";



@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular</h1><courses></courses> <authors></authors>' +
    '<favorite [is-favorite]="[post.isFavorite]" (favorite-change-event)="onFavoriteChange($event)"></favorite>' +
    // WROOOONG: '<heart [totalLikes]="[tweet.totalLikes]" [iLike]="[tweet.iLike]"></heart>',
    '<heart [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></heart>',
    directives:[CoursesComponent, AuthorsComponent, FavoriteComponent, HeartComponent]
})
export class AppComponent {

    post = {
        title: "App component main Tittle",
        isFavorite: true,
        totalLikes: 10,
        iLike: false
    }

    tweet = {
        totalLikes: 10,
        iLike: false
    }

    onFavoriteChange($event){
        console.log( $event);
    }

}