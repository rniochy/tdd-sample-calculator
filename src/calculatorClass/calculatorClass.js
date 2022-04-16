export default class CalculatorClass {
    
   //  constructor (){
   //      this.calculateValue.bind();
   //  }

      calculateValue = (value)=> {
       // let firstValue = ""; //First Value after signal
       // let secondValue = 0; //Second Value after signal
       let lengthOfValue = value.length;
       let result;
 
       for (let i = 0; i < lengthOfValue; i++) {
          switch (value[i]) {
             case '+': {
                // secondValue = this.secondeFunction(value, i, lengthOfValue)
                const [firstValue, secondValue] = value.split(value[i]);
                result = this.sum(+firstValue, +secondValue);
                break;
             }
             case '*': {
                const [firstValue, secondValue] = value.split(value[i]);
                result = this.times(+firstValue, +secondValue);
                break;
             }
             case '-': {
                const [firstValue, secondValue] = value.split(value[i]);
                result = this.minus(+firstValue, +secondValue);
                break;
             }
             case '/': {
                const [firstValue, secondValue] = value.split(value[i]);
                result = this.divid(+firstValue, +secondValue);
                break;
             }
             // default: {
             //    firstValue += value[i];
             // }
          }
       }
         if(result == 0){
             return result;
         } else if(result){
             return result;
         } else {
             return +value
         }
    }
    // Math functions operations 
    sum(value1, value2) {
       return value1 + value2;
    }
    divid(value1, value2) {
       return value1 / value2;
    }
    minus(value1, value2) {
       return value1 - value2;
    }
    times(value1, value2) {
       return value1 * value2;
    }
 
    // Convert the o second value in Number
    // secondeFunction(value, i, lengthOfValue) {
    //    return Number(value.substring(i + 1, lengthOfValue));
    // }
 
 }