import employee from "./employee.js";
import manageEmployee from "./manageEmployee.js";
import validation from "./validation.js";

let ManageEmployee = new manageEmployee();
let dataStore = [];
let Validation = new validation();

const getEleId = (id) => document.getElementById(id);

//save to local storage
const setLocalStorage = () =>{
    const dataString = JSON.stringify(ManageEmployee.employees);
    localStorage.setItem("LIST_EMPLOYEES", dataString);
}



const renderEmployee = (employees) =>{
    let contentHtml = "";
    employees.forEach((employee) => {
        contentHtml += `
            <tr>
                <td>${employee.account}</td>
                <td>${employee.name}</td>
                <td>${employee.email}</td>
                <td>${employee.workDay}</td>
                
                <td>${employee.position}</td>
                <td>${employee.totalSalary}</td>
                <td>${employee.type}</td>
                <td>
                    <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="updateEmployee('${
                    employee.account
                  }')">Cập nhật</button>
                    <button class="btn btn-danger" onclick="deleteEmployee('${
                    employee.account
                  }')">Xoá</button>
                </td>
            </tr>
        `;
    })
    getEleId("tableDanhSach").innerHTML =  contentHtml;
}
const getLocalStorage = () =>{
    const dataString = localStorage.getItem("LIST_EMPLOYEES");
    if(dataString){
        const dataJson = JSON.parse(dataString);
        ManageEmployee.employees = dataJson;
        renderEmployee(ManageEmployee.employees);
    }
}
getLocalStorage();

const getEmployeeInfo = () =>{
    //get value from input field
    const account = getEleId("tknv").value;
    const name = getEleId("name").value;
    const email = getEleId("email").value;
    const password = getEleId("password").value;
    const workDay = getEleId("datepicker").value;
    const mainSalary = getEleId("luongCB").value;
    const position = getEleId("chucvu").value;
    const workingHours = getEleId("gioLam").value;

    let isValid = true;

    //check account
    isValid &= Validation.checkEmpty(account, "tbTKNV", "Vui lòng không để trống") &&
                Validation.checkInteger(account, "tbTKNV", "Vui lòng điền tài khoản hợp lệ") &&
                Validation.checkLength(account, "tbTKNV", "Tài khoản chỉ có từ 4 đến 6 ký tự", 4, 6)&&
                
                Validation.checkEmpty(name, "tbTen", "Tên không được để trống")&&
                Validation.checkCharactersString(name, "tbTen", "Vui lòng điền tên hợp lệ")&&
                
                Validation.checkEmpty(email, "tbEmail", "Vui lòng không để trống")&&
                Validation.checkValidEmail(email, "tbEmail", "Vui lòng nhập đúng định dạng email")&&
                
                Validation.checkEmpty(password, "tbMatKhau", "Vui lòng không để trống")&&
                Validation.checkValidPassword(password, "tbMatKhau", "Vui lòng nhập mật khẩu có chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt ")&&
                Validation.checkLength(password, "tbMatKhau", "Mật khẩu có từ 6 đến 10 ký tự", 6, 10)&&
                
                Validation.checkEmpty(workDay, "tbNgay", "Vui lòng không để trống")&&
                Validation.checkValidDate(workDay, "tbNgay", "Vui lòng nhập ngày hợp lệ")&&
                
                Validation.checkEmpty(mainSalary, "tbLuongCB", "Vui lòng không để trống")&&
                Validation.checkSalary(mainSalary, "tbLuongCB", "Lương cơ bản từ 1.000.000 đến 20.000.000 triệu")&&

                Validation.checkOption("chucvu", "tbChucVu", "Vui lòng chọn chức vụ")&&

                Validation.checkEmpty(workingHours, "tbGiolam", "Vui lòng không để trống")&&
                Validation.checkWorkingHours(workingHours, "tbGiolam", "Số giờ làm từ 80 đến 200 giờ");
                


    if(isValid){
        const Employee = new employee(account, name, email, password, workDay, mainSalary, position, workingHours);
        return Employee;
    }
    return null;
}

getEleId("btnThem").onclick = () =>{
    getEleId("btnThemNV").style.display = "block";
    getEleId("btnCapNhat").style.display = "none";
}

getEleId("btnThemNV").onclick = () =>{
    
    const employee = getEmployeeInfo();
    if(employee){
        ManageEmployee.addEmployee(employee);
        renderEmployee(ManageEmployee.employees);
        console.log(employee);
        //close modal
        getEleId("btnDong").click();
        setLocalStorage();
    }
    
}

const deleteEmployee = (account)=>{
    ManageEmployee.deleteEmployeeByAccount(account);
    renderEmployee(ManageEmployee.employees);
    setLocalStorage();

}
window.deleteEmployee = deleteEmployee;

const updateEmployee = (account)=>{
    getEleId("header-title").innerHTML = "Chỉnh sửa";
    getEleId("btnThemNV").style.display = "none";
    getEleId("btnCapNhat").style.display = "block";

    const Employee = ManageEmployee.getEmployeeByAccount(account);
    if(Employee) {
        getEleId("tknv").value = Employee.account;
        getEleId("name").value = Employee.name;
        getEleId("email").value = Employee.email;
        getEleId("password").value = Employee.password;
        getEleId("datepicker").value = Employee.workDay;
        getEleId("luongCB").value = Employee.mainSalary;
        getEleId("chucvu").value = Employee.position;
        getEleId("gioLam").value = Employee.workingHours;
    }

    
}
window.updateEmployee = updateEmployee;

getEleId("btnCapNhat").onclick = ()=>{
    const employee = getEmployeeInfo();
    if(!employee) return;
    ManageEmployee.updateEmployee(employee);
    renderEmployee(ManageEmployee.employees);
    console.log(employee);
    //close modal
    getEleId("btnDong").click();
    setLocalStorage();
}

//filter
getEleId("searchName").addEventListener("keyup", ()=>{
    const keyword = getEleId("searchName").value;
    const dataFilter = dataStore.filter((employee)=>{
        return employee.position.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    })

    renderEmployee(dataFilter);
}) 

