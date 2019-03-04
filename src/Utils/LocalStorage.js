var addEmployee = (employee) => {

    var employees = localStorage.getItem('employees');
    var employeesObject = JSON.parse(employees);

    if(! employeesObject){
        employeesObject = [];
    }
    employeesObject.push(employee);
    localStorage.setItem('employees', JSON.stringify(employeesObject));
}

var getemployees = () => {

    var employees = localStorage.getItem('employees');
    var employeesObject = JSON.parse(employees); 

    return employeesObject;
}

var deleteEmployee = (index) => {
    var employees = localStorage.getItem('employees');
    var employeesObject = JSON.parse(employees); 

    employeesObject.forEach(function(employee,originalIndex){

        if(index === originalIndex){
            employeesObject.pop(index)
        }
  
      });
      localStorage.setItem('employees', JSON.stringify(employeesObject))  
}

var applicationUsers = () => {

    localStorage.setItem("user", "Madhuri");
    localStorage.setItem("password", "madhu");
}

var getApplicationUsers = () => {

    var user = localStorage.getItem("user");
    var password = localStorage.getItem("password");

    var userObject 
}

module.exports = {
    addEmployee,
    getemployees,
    deleteEmployee,
    applicationUsers
}