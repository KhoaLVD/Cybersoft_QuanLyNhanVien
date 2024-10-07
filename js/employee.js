class employee {
    constructor(_account, _name, _email, _password, _workDay, _mainSalary, _position, _workingHours){
        this.account = _account;
        this.name = _name;
        this.email = _email;
        this.password = _password;
        this.workDay = _workDay;
        this.mainSalary = _mainSalary;
        this.position = _position;
        this.workingHours = _workingHours;
        this.totalSalary = this.calculateTotalSalary();
        this.type = this.typeRankings();
    }
    typeRankings(){
        if(this.workingHours >= 192){
            this.type = "Nhân viên xuất sắc";
        } else if(this.workingHours >=176){
            this.type = "Nhân viên giỏi";
        } else if(this.workingHours >=160){
            this.type = "Nhân viên khá";
        } else{
            this.type = "Nhân viên trung bình";
        }
        return this.type;
    }
    calculateTotalSalary(){
        if(this.position === "Sếp"){
            this.totalSalary = this.mainSalary * 3;
        }else if(this.position === "Trưởng phòng"){
            this.totalSalary = this.mainSalary * 2;
        }else{
            this.totalSalary = this.mainSalary;
        }
        return this.totalSalary;
    }
}
export default employee;