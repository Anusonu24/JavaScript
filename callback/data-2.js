let employees = [{ id: 101, name: "ANUSHREE", sal: 45000}, { id: 102, name:
"sonu", sal: 55000 }]

let createEmployees = (emp) => {
    //insert data into data source is array
    setTimeout(() => {
        employees.push(emp)
    }, [4000])
}
let getEmployees = () => {
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
            console.log("test 1234")

        }
        createEmployees({ id: 103, name: "ANUSHREE", sal:650000 })
        getEmployees()
        
    
 
