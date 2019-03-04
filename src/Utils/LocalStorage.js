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

module.exports = {
    addEmployee,
    getemployees,
    deleteEmployee
}