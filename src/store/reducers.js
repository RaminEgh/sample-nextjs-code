import {combineReducers} from "redux";
import home from './reducer/public-panel/home-reducer';
import adminCourse from './reducer/admin-panel/course-reducer';
import course from './reducer/public-panel/course-reducer.js';
import adminTeacher from './reducer/admin-panel/teacher-reducer.js';
import global from './reducer/global-reducer';
import adminUser from './reducer/admin-panel/user-reducer';
// COMBINED REDUCERS

const reducers = {
    homeRdcr: home,
    adminCourseRdcr: adminCourse,
    courseRdcr: course,
    adminTeacherRdcr: adminTeacher,
    globalRdcr: global,
    adminUserRdcr: adminUser,
}

export default combineReducers(reducers);