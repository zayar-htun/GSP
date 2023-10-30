
const api = "http://localhost:8888";

export function getToken() {
	return localStorage.getItem("token") || false;
}

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

//get upload module
export async function getUploadModule(formData){
	const res = await fetch(`${api}/uploadmodule`,{
		method: "post",
		body: formData
	})

	if(res.ok){
		let result = await res.json();

		return result;
	}
	return false;
}


//get login
export async function getLogin(email,password){
	const res = await fetch(`${api}/login`,{
		method:"POST",
		headers: {
			"Content-Type": "application/json",
		},
		body : JSON.stringify({email,password})
	})

	if(res.ok){
		let result = await res.json();
		localStorage.setItem("token", result.token)

		return result;
	}
	return false;
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