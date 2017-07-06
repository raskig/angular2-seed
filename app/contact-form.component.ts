import {Component} from 'angular2/core';




@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form.component.html',
    styleUrls: ['app/styles.css']
})
export class ContactFormComponent{

    log(x){
        console.log(x);
    }
}