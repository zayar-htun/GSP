
const api = "http://localhost:8888";

//get student Register
export async function getStuRegister(formData){
	const res = await fetch(`${api}/sturegister`,{
		method: "post",
		body: formData
	})

	return res.ok;
}

//get teacher Register
export async function getTeaRegister(formData){
	const res = await fetch(`${api}/teacherregister`,{
		method: "post",
		body: formData
	})

	return res.ok;
}

//get Best Course
export async function getBestCourse(){
	const res = await fetch(`${api}/bestcourses`);
	if (!res.ok) return false;

    const bestcourses = await res.json();
    return bestcourses;
}

//get course detail
export async function getCourseDetail(id){
	const res = await fetch(`${api}/courseDetail/${id}`);
	if (!res.ok) return false;

    const bestcourses = await res.json();
    return bestcourses;
}