const api = "http://localhost:8888";

export function getToken() {
    return localStorage.getItem("token") || false;
}

//get student Register
export async function getStuRegister(formData) {
    const res = await fetch(`${api}/sturegister`, {
        method: "post",
        body: formData,
    });

    return res.ok;
}

//get teacher Register
export async function getTeaRegister(formData) {
    const res = await fetch(`${api}/teacherregister`, {
        method: "post",
        body: formData,
    });

    return res.ok;
}

//get upload module
export async function getUploadModule(formData) {
    const res = await fetch(`${api}/uploadmodule`, {
        method: "post",
        body: formData,
    });

    if (res.ok) {
        let result = await res.json();

        return result;
    }
    return false;
}

//get upload course
export async function getUploadCourse(formData) {
    const token = getToken();
    const res = await fetch(`${api}/uploadCourse`, {
        method: "post",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    });

    if (res.ok) {
        let result = await res.json();

        return result;
    }
    return false;
}

//get login
export async function getLogin(email, password) {
    const res = await fetch(`${api}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
        let result = await res.json();
        localStorage.setItem("token", result.token);

        return result;
    }
    return false;
}

//get upload comment

export async function getUploadComment(commentedCourse, text) {
    const token = getToken();
    const res = await fetch(`${api}/uploadComment`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({commentedCourse, text }),
    });
    if (!res.ok) return false;

    const uploadComment = await res.json();
    return uploadComment;
}

//get Best Course
export async function getBestCourse() {
    const res = await fetch(`${api}/bestcourses`);
    if (!res.ok) return false;

    const bestcourses = await res.json();
    return bestcourses;
}

//get course detail
export async function getCourseDetail(id) {
    const res = await fetch(`${api}/courseDetail/${id}`);
    if (!res.ok) return false;

    const bestcourses = await res.json();
    return bestcourses;
}


//get payment 

export async function getPayment(accountNo, pincode, receiveNo, amount,id,teacherId) {
    const token = getToken();
    const res = await fetch(`${api}/payment`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({accountNo, pincode, receiveNo, amount,id,teacherId}),
    });
    if (!res.ok) return false;

    const paymentMethod = await res.json();
    return paymentMethod;
}


//get enrolledCourse
export async function getEnrolledCourse() {
    const token = getToken();
    const res = await fetch(`${api}/enrolledCourses`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) return false;

    const enrollCourse = await res.json();
    return enrollCourse;
}

//getTopUp
export async function getTopUp(name,accountNo,pin,amount){
    const token = getToken();
    const res = await fetch(`${api}/topup`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name,accountNo,pin,amount}),
    });
    if (!res.ok) return false;

    const paymentMethod = await res.json();
    return paymentMethod;
}

export async function getChatRoom(){
    const token = getToken();
    const res = await fetch(`${api}/chatRoom`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    if (!res.ok) return false;

    const paymentMethod = await res.json();
    return paymentMethod;
}