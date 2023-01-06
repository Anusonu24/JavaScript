let employees = [{ id: 101, name: "anushree", sal: 45000}, {id:102, name:
"RITHU",sal:55000 }]

let createEmployee = (emp) => {
    //insert data into data source is array
    setTimeout(() => {
        employees.push(emp)
    }, [4000])
     
}
let getemployees = () => {
    //display into html table
    setTimeout(() => {},[10000])
}

createEmployee({id: 103, name: "sonu",sal: 65000})
getEmployees()