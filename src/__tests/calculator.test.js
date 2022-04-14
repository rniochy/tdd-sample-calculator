class Calculator {

     convertValue(value){
          let firstValue ="";
          let secondValue = 0;
          let lengthOfValue = value.length;
          let result;

          for(let i=0; i < lengthOfValue; i++){
               switch(value[i]){
                    case '+': {
                     secondValue = this.secondeFunction(value,i, lengthOfValue)
                     result = this.sum((+firstValue) , secondValue);
                          break;
                    }
                    case '*': {
                     secondValue = this.secondeFunction(value,i, lengthOfValue)
                     result = this.times( (+firstValue) , secondValue);;
                          break;
                    }
                    case '-': {
                     secondValue = this.secondeFunction(value,i, lengthOfValue)
                     result = this.minus((+firstValue) , secondValue);
                          break;
                    }
                    case '/': {
                     secondValue = this.secondeFunction(value,i, lengthOfValue)
                     result = this.divid((+firstValue) , secondValue);
                          break;
                    }
                    default:{
                         firstValue+= value[i];
                         }
               }
          } 
          
          return result ?  result : +value
     }
     
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

    // Convert the o second value
    secondeFunction(value, i, lengthOfValue) {
          return Number(value.substring(i+1, lengthOfValue));
    }

}

const calculator = new Calculator()
describe('#Calculator  functions ', () => {
     it("Should sum two numbers", ()=>{
 
        expect(calculator.sum(2,2)).toBe(4)
           
     })
     it("Should subtract two numbers", ()=>{
     //    const calculator = new Calculator()
        expect(calculator.minus(2,1)).toBe(1)
           
     })
     it("Should multiplicate two numbers", ()=>{
     //    const calculator = new Calculator()
        expect(calculator.times(2,3)).toBe(6)
           
     })
     it("Should divid two numbers", ()=>{
     //    const calculator = new Calculator()
        expect(calculator.divid(6,3)).toBe(2)
           
     })
     it("Should show a complet operation without signal", ()=>{
        const calculator = new Calculator()
        expect(calculator.convertValue("20420")).toBe(20420)
           
     })
     it("Should show a complet operation", ()=>{
        const calculator = new Calculator()
        expect(calculator.convertValue("20420")).toBe(20420)
           
     })
     it("Should show a complet operation", ()=>{
        const calculator = new Calculator()
        expect(calculator.convertValue("20420")).toBe(20420)
           
     })
     it("Should show a complet operation", ()=>{
        const calculator = new Calculator()
        expect(calculator.convertValue("20420")).toBe(20420)
           
     })
     it("Should show a complet operation", ()=>{
        const calculator = new Calculator()
        expect(calculator.convertValue("20420")).toBe(20420)
           
     })
});
