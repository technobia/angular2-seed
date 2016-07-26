/**
 * Created by apium on 21/07/2016.
 */
import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    templateUrl: 'templates/courses.html',
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    title = 'The title of courses page';
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}