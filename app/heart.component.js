System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var HeartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeartComponent = (function () {
                function HeartComponent() {
                    /*
                    @Input('total-likes') totalLikes = 0;
                    @Input('is-liked') iLike = false;
                
                    onClick(){
                        console.log("Clicked..");
                        console.log("is liked?" + this.iLike);
                        console.log("Total?" + this.totalLikes);
                        this.iLike = !this.iLike;
                        if(this.iLike){
                            this.totalLikes = this.totalLikes -1;
                        }
                        else{
                            this.totalLikes = this.totalLikes +1;
                        }
                        //this.totalLikes = (this.isLiked ? 1 : -1);
                        console.log("After is liked?" + this.iLike);
                        console.log("After Total?" + this.totalLikes);
                    }
                    */
                    this.totalLikes = 0;
                    this.iLike = false;
                }
                HeartComponent.prototype.onClick = function () {
                    console.log("iLike before" + this.iLike);
                    console.log("total before" + this.totalLikes);
                    this.iLike = !this.iLike;
                    this.totalLikes += this.iLike ? 1 : -1;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], HeartComponent.prototype, "totalLikes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], HeartComponent.prototype, "iLike", void 0);
                HeartComponent = __decorate([
                    core_1.Component({
                        selector: 'heart',
                        templateUrl: 'app/heart.template.html',
                        styles: ["\n        .glyphicon-heart {\n            color: #ccc;\n            cursor: pointer;\n        }\n\n        .highlighted {\n            color: deeppink;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeartComponent);
                return HeartComponent;
            }());
            exports_1("HeartComponent", HeartComponent);
        }
    }
});
//# sourceMappingURL=heart.component.js.map