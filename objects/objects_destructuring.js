let course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Hussain"
}
// cousere.courseInstructor

let { courseInstructor: Instructor } = course // now we don't have to write course.courseInstructor we can directly write Instructor
console.log(Instructor)

// JSON
// {
//     "name": "Hussain",
//     "age": 24,
//     "coursename": "Javascript"
// }

 