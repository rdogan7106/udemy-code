/**
 * Query Selector Function
 * @param {*} pString 
 * @returns 
 */
function querySelector(pString){
    return document.querySelector(pString);
}

function Course(title,instructor,image){
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

const newCourse = querySelector('#new-course');
newCourse.addEventListener('click',function(e){
    const title = querySelector('#title').value;
    const instructor = querySelector('#instructor').value;
    const image = querySelector('#image').value;
    //console.log(title,instructor,image)
    //Create course Object
    const course = new Course(title,instructor,image);
    console.log(course)


    e.preventDefault();
})
