let cars =  [{ model: "xuv500", Brand: "mahindra", price: 1500000, color:
"white" },
{ model: "blackbird", Brand: "tata", price: 190000000, color: "red"},
{ model: "x5", Brand: "BMW", price: 8000000, color: "Rose" },
{ model: "swift", Brand: "maruthi", price: 1800000, color: "white" },
{ model: "safari", Brand: "tata", price: 18000000, color: "white" },
{ model: "rapid", brand: "skond", price: 1300000, color: "gray" },
{
    model: "POLO", brand: "vw", price: 9000000, color: "white"
},
{ model: "Tiago", Brand: "tata", price: 40000000, color: "white" },
{ model: "Scorpio N", Brand: "Mahindra", price: 2500000, color: "White" },
{ model: "X1", Brand: "BMW", price: 3500000, color: "Black" },
{ model: "Nexon", Brand: "Tata", price: 1500000, color: "White" }]
let new_Cars = []

for (car of cars) {
    if (car.color === "White") {
        //console.log(car)
        //new_Cars.push("GM")
        new_Cars.push(car)
    }
}
console.log(new_Cars)}
]