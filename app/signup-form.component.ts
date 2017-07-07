import {Component} from 'angular2/core';
import {Control, ControlGroup, FormBuilder, Validators} from "angular2/common";
import {UsernameValidators} from "./usernameValidators";

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
    // form = new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)
    // });

    form: ControlGroup;

    constructor(fb : FormBuilder){
        this.form = fb.group({
            username:['', Validators.compose([
                    Validators.required,
                    UsernameValidators.cannotContainSpace])],
            password: ['', Validators.required]
        })
    }

    signup(){
        console.log(this.form.value);
    }
}