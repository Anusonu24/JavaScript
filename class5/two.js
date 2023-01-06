class account {
    min_bal = 500;
    acc_bal = 0;
    acc_name = ""
    set_AccountName(name){
        this.acc_name = name
    }
    depoist_amount(account){
        this.acc_bal = this.acc_bal + this.depoist_amount
    }
    get_bal(){
        return this.acc_bal - this.min_bal
    }

}
let a1 = new account()
let a2 = new account()
console.log(a1)
console.log(a2)
a1.set_AccountName("ANU")
a2.set_AccountName("RITHU")
console.log("after updating name")
console.log(a1)
console.log(a2)
console.log("after deposit")
a1.deposit_Amount(500)
a2.deposit_Amount(50001)
console.log(a1)
console.log(a2)