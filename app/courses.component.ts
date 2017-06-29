
import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',//css will find this selector. this is for style
    template:
    `<h2>Courses</h2>
    {{title}}
    <input type="text" autoGrow/>
    <ul>
        <li *ngFor="#course of courses">
            {{course}}
        </li>
    </ul>`,// this is the markup
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent{
    tittle: string = "This is the courses page tittle";
    courses ;

    constructor(courseService : CourseService){
        this.courses = courseService.getCourses();
    }
}
