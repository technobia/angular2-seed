/**
 * Created by apium on 21/07/2016.
 */
import {Component} from 'angular2/core'

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
        `
})
export class CoursesComponent {
    title = 'The title of courses page';
    courses = ['Courses1', 'Courses2', 'Courses3']
}