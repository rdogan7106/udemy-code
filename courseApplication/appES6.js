/**
 * Query Selector Function
 * @param {*} pString 
 * @returns 
 */
 function querySelector(pString){
    return document.querySelector(pString);
}
//Course Class
class Course{
    constructor(title,instructor,image){
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
}
//UI Class
class UI{
    addCourseToList(course){
        const list = querySelector('#course-list');
        let html = `
                <tr>
                    <td><img src="./img/${course.image}"></td>
                    <td>${course.title}</td>
                    <td>${course.instructor}</td>
                    <td><a href ='#' class ='btn btn-danger btn-sm delete'>Delete</a></td>
                </tr>
            `
            list.innerHTML += html;
    }

    clearControls(){
        const title = querySelector('#title').value=""
        const instructor = querySelector('#instructor').value=""
        const image = querySelector('#image').value=""
    }
    deleteCourse(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
        }
    }
    showAlert(message,className){
        let alert = `
                    <div class ='alert alert-${className}'>
                        ${message}
                    </div>
            `;
        const row = querySelector('.row');
        //beforeBegin, afterBegin, beforeEnd, afterEnd 
        row.insertAdjacentHTML('beforeBegin',alert)
        setTimeout(()=>{
            querySelector('.alert').remove()
        },1500)
        }
}
// Storage Class
class Storage{
    static getCourses(){
        let courses;
        if(localStorage.getItem('courses')===null){
            courses =[];

        }
        else{
            courses = JSON.parse(localStorage.getItem('courses'))
        }
        return courses;

    }

    static displayCourses(){
        const courses = Storage.getCourses();
        courses.forEach(course => {
            const ui = new UI();
            ui.addCourseToList(course)
        });

    }
    static addCourse(course){
        const courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem('courses',JSON.stringify(courses));
    }

    static deleteCourse(){

    }
}

document.addEventListener('DOMContentLoaded',Storage.displayCourses);



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
    if(title ==='' ||instructor===''|| image===''){
        ui.showAlert('Please complete the form','warning')
    }
    else{
        //add course to List
        ui.addCourseToList(course);
        //save to local Storage
        Storage.addCourse(course)

        //clear controls
        ui.clearControls();
        ui.showAlert('the course has been added','success')

    } 

    e.preventDefault();
})
querySelector('#course-list').addEventListener('click',function(e){
   const ui = new UI();
   //delete Course
   ui.deleteCourse(e.target);
    // delete form local Storage

    Storage.deleteCourse();
   ui.showAlert('the course has been deleted','danger')

})