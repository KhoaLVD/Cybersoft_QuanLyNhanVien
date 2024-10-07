

class manageEmployee {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    findEmployeeByAccount(account) {
        const index = this.employees.findIndex((employee)=>{
            return employee.account === account;
        })
        return index;
    }
    getEmployeeByAccount(account) {
        const index = this.findEmployeeByAccount(account);
        if(index!== -1) {
            return this.employees[index];
        }
        return null;
    }
    deleteEmployeeByAccount(account) {
        const index = this.findEmployeeByAccount(account);
        if(index !== -1) {
            this.employees.splice(index, 1);
        }
    }
    updateEmployee(employee) {
        const index = this.findEmployeeByAccount(employee.account);
        if(index!== -1) {
            this.employees[index] = employee;
        }
        
    }
    filterEmployee(position){
        let listFilterEmployee = [];
        listFilterEmployee = this.employees.filter((employee)=> employee.position === position);
        return listFilterEmployee;
    }

}

export default manageEmployee;