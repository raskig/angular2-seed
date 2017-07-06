import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";
import {FavoriteComponent} from "./favorite.component";
import {HeartComponent} from "./heart.component";
import {VoteComponent} from "./vote.component"
import {ZippyPanel} from "./zippy.component"
import {ContactFormComponent} from "./contact-form.component"



@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular</h1><courses></courses> <authors></authors>
    <favorite [is-favorite]="[post.isFavorite]" (favorite-change-event)="onFavoriteChange($event)"></favorite>
        <!-- WROOOONG: '<heart [totalLikes]="[tweet.totalLikes]" [iLike]="[tweet.iLike]"></heart>-->
        <heart [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></heart>
        <vote [voteCount]="vote.count" [myVote]="vote.myVote" (vote)="onVote($event)"></vote>
        <div>
            <zippy tittle="Who can see my stuff?">This is the who can see.</zippy>
            <zippy tittle="Who can see my stuff2?">This is the who can see2.</zippy>
        </div>
    <contact-form></contact-form>`,
    directives:[CoursesComponent, AuthorsComponent, FavoriteComponent, HeartComponent, VoteComponent, ZippyPanel, ContactFormComponent]
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

    vote = {
        count: 10,
        myVote: 0
    }

    onFavoriteChange($event){
        console.log($event);
    }

    onVote($event){
        console.log($event);
    }

}