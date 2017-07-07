System.register(['angular2/core', "./courses.component", "./authors.component", "./favorite.component", "./heart.component", "./vote.component", "./zippy.component", "./contact-form.component", "./signup-form.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, favorite_component_1, heart_component_1, vote_component_1, zippy_component_1, contact_form_component_1, signup_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "App component main Tittle",
                        isFavorite: true,
                        totalLikes: 10,
                        iLike: false
                    };
                    this.tweet = {
                        totalLikes: 10,
                        iLike: false
                    };
                    this.vote = {
                        count: 10,
                        myVote: 0
                    };
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Hello Angular</h1><courses></courses> <authors></authors>\n    <favorite [is-favorite]=\"[post.isFavorite]\" (favorite-change-event)=\"onFavoriteChange($event)\"></favorite>\n        <!-- WROOOONG: '<heart [totalLikes]=\"[tweet.totalLikes]\" [iLike]=\"[tweet.iLike]\"></heart>-->\n        <hr>\n        <heart [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></heart>\n        <hr>\n        <vote [voteCount]=\"vote.count\" [myVote]=\"vote.myVote\" (vote)=\"onVote($event)\"></vote>\n        <hr>\n        <div>\n            <zippy tittle=\"Who can see my stuff?\">This is the who can see.</zippy>\n            <zippy tittle=\"Who can see my stuff2?\">This is the who can see2.</zippy>\n        </div>\n        <hr>\n        <contact-form></contact-form>\n        <hr>\n        <signup-form></signup-form>",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favorite_component_1.FavoriteComponent, heart_component_1.HeartComponent, vote_component_1.VoteComponent, zippy_component_1.ZippyPanel, contact_form_component_1.ContactFormComponent, signup_form_component_1.SignUpFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map