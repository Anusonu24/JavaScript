let employees = [{ id:101, name: "Anushree", sal: 45000 },{ id: 102, name:
"RITHU", sal: 55000 }]

let createEmployee = (emp, callback) => {
    //insert data into data source is array
    setTimeout(() => {
        employees.push(emp)
        callback()
    }, [4000])
}
let getEmployees = () =>{
    //display inton html table
    console.log("test case 123")
    var rows = ""
    setTimeout(() => {

        employees.forEach((employee) => {
            rows = rows + `<tr>
                          <td> ${employee.id}</td>
                          <td> ${employee.name}</td>
                          <td> ${employee.sal}</td>
                          </tr>`
                      
        });
        document.getElementById('tbody_data').innerHTML = rows
    }, [1000])
    console.log("text 1234")
        
    }

    createEmployee({ id: 103, name: "ANUSHREE", sal: 650000 }, getEmployees)



    