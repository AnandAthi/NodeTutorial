class convertCurrency{
    constructor(amount) {
        this.dollar = amount
    }
    
    conversion = 0.91

    canadianToUS(){
    return dollar/conversion
   }

     usToCanadian(){
    return dollar * conversion
  }
}


module.exports.convertCurrency = convertCurrency
