class validation {
    checkEmpty(value, divId, message){
        if(value === ""){
            //show error message
        document.getElementById(divId).innerHTML = message;
        document.getElementById(divId).style.display = "block";
        return false;
    }
    //hide error message
        document.getElementById(divId).innerHTML = "";
        document.getElementById(divId).style.display = "none";
        return true;
    }
    checkInteger(value, divId, message){
        const number = /^[0-9]+$/;
        if(value.match(number)){
            //hide error message
            document.getElementById(divId).innerHTML = "";
            document.getElementById(divId).style.display = "none";
            return true;
        }
        //show error message
        document.getElementById(divId).innerHTML = message;
        document.getElementById(divId).style.display = "block";
        return false;
    }
    checkCharactersString(value, divId, message) {
        const letter =
          "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
          "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
          "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    
        if (value.match(letter)) {
          // hide error message
          document.getElementById(divId).innerHTML = "";
          document.getElementById(divId).style.display = "none";
          return true;
        }
    
        // show error message
        document.getElementById(divId).innerHTML = message;
        document.getElementById(divId).style.display = "block";
        return false;
    }
    checkLength(value, divId, message, min, max){
        if(value.length >= min && value.length <= max){
            // hide error message
            document.getElementById(divId).innerHTML = "";
            document.getElementById(divId).style.display = "none";
            return true;
        } else {
            // show error message
            document.getElementById(divId).innerHTML = message;
            document.getElementById(divId).style.display = "block";
            return false;
        }
    }
    checkValidEmail(value, divId, message){
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(value.match(emailRegex)){
            // hide error message
            document.getElementById(divId).innerHTML = "";
            document.getElementById(divId).style.display = "none";
            return true;
        } else {
            // show error message
            document.getElementById(divId).innerHTML = message;
            document.getElementById(divId).style.display = "block";
            return false;
        }
    }
    checkValidPassword(value, divId, message){
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if(value.match(passwordRegex)){
            // hide error message
            document.getElementById(divId).innerHTML = "";
            document.getElementById(divId).style.display = "none";
            return true;
        } else {
            // show error message
            document.getElementById(divId).innerHTML = message;
            document.getElementById(divId).style.display = "block";
            return false;
        }
    }
    checkValidDate(value, divId, message){
        const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
        if(value.match(dateRegex)){
            // hide error message
            document.getElementById(divId).innerHTML = "";
            document.getElementById(divId).style.display = "none";
            return true;
        } else {
            // show error message
            document.getElementById(divId).innerHTML = message;
            document.getElementById(divId).style.display = "block";
            return false;
        }
    }
    checkOption(idSelect, divId, message) {
        if (document.getElementById(idSelect).selectedIndex !== 0) {
          // hide error message
          document.getElementById(divId).innerHTML = "";
          document.getElementById(divId).style.display = "none";
          return true;
        }
        // show error message
        document.getElementById(divId).innerHTML = message;
        document.getElementById(divId).style.display = "block";
        return false;
      }
    checkSalary(value, divId, message) {
        if (value >= 1000000 && value <= 20000000) {
          // hide error message
          document.getElementById(divId).innerHTML = "";
          document.getElementById(divId).style.display = "none";
          return true;
        }
        // show error message
        document.getElementById(divId).innerHTML = message;
        document.getElementById(divId).style.display = "block";
        return false;
  
    }
    checkWorkingHours(value, divId, message) {
        if (value >= 80 && value <= 200) {
          // hide error message
          document.getElementById(divId).innerHTML = "";
          document.getElementById(divId).style.display = "none";
          return true;
        }
        // show error message
        document.getElementById(divId).innerHTML = message;
        document.getElementById(divId).style.display = "block";
        return false;
    }
}
export default validation;