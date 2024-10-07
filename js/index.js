import employee from "./employee.js";
import manageEmployee from "./manageEmployee.js";

let ManageEmployee = new manageEmployee();

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

    const Employee = new employee(account, name, email, password, workDay, mainSalary, position, workingHours);
    return Employee;
}

getEleId("btnThem").onclick = () =>{
    getEleId("btnThemNV").style.display = "block";
    getEleId("btnCapNhat").style.display = "none";
}

getEleId("btnThemNV").onclick = () =>{
    
    const employee = getEmployeeInfo();
    ManageEmployee.addEmployee(employee);
    renderEmployee(ManageEmployee.employees);
    console.log(employee);
    //close modal
    getEleId("btnDong").click();
    setLocalStorage();
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

    getEleId("tknv").value = Employee.account;
    getEleId("name").value = Employee.name;
    getEleId("email").value = Employee.email;
    getEleId("password").value = Employee.password;
    getEleId("datepicker").value = Employee.workDay;
    getEleId("luongCB").value = Employee.mainSalary;
    getEleId("chucvu").value = Employee.position;
    getEleId("gioLam").value = Employee.workingHours;
}
window.updateEmployee = updateEmployee;

getEleId("btnCapNhat").onclick = ()=>{
    const employee = getEmployeeInfo();
    ManageEmployee.updateEmployee(employee);
    renderEmployee(ManageEmployee.employees);
    console.log(employee);
    //close modal
    getEleId("btnDong").click();
    setLocalStorage();
}

//filter
getEleId("searchName").addEventListener("change", ()=>{
    const value = getEleId("searchName").value;
    const listFilterEmployee = ManageEmployee.filterEmployee(value);
    renderEmployee(listFilterEmployee);
})

const getLocalStorage = () =>{
    const dataString = localStorage.getItem("LIST_EMPLOYEES");
    if(dataString){
        const dataJson = JSON.parse(dataString);
        ManageEmployee.employees = dataJson;
        renderEmployee(ManageEmployee.employees);
    }
}
getLocalStorage();