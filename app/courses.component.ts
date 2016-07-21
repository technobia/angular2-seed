/**
 * Created by apium on 21/07/2016.
 */
import {Component} from 'angular2/core'
import {CourseService} from './course.service'

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{title}}
        <ul>
            <li *ngFor="#course of courses">
            {{course}}
            </li>
        </ul>
        `,
    providers: [CourseService]
})
export class CoursesComponent {
    title = 'The title of courses page';
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}