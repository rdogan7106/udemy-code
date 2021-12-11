/**
 * Query Selector Function
 * @param {*} pString 
 * @returns 
 */
function querySelector(pString){
    return document.querySelector(pString);
}
// Course Constructor
function Course(title,instructor,image){
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}
//UI constructor
function UI(){
}

UI.prototype.addCourseToList = function(course){
    const list = querySelector('#course-list');
    let html = `
            <tr>
                <td><img src="./img/${course.image}"></td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td><a href ='#' class ='btn btn-danger btn-sm'>Delete</a></td>
            </tr>
        `
        list.innerHTML += html;
}
UI.prototype.clearControls = function(){
    const title = querySelector('#title').value=""
    const instructor = querySelector('#instructor').value=""
    const image = querySelector('#image').value=""
}

const newCourse = querySelector('#new-course');
newCourse.addEventListener('click',function(e){
    const title = querySelector('#title').value;
    const instructor = querySelector('#instructor').value;
    const image = querySelector('#image').value;
    //console.log(title,instructor,image)
    //Create course Object
    const course = new Course(title,instructor,image);
    //create UI
    const ui = new UI();
    //add course to List
    ui.addCourseToList(course);
    //clear controls
    ui.clearControls();

    e.preventDefault();
})
