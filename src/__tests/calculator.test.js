class Calculator {

     convertValue(value){
          let firstValue ="";
          // let secondValue ="";
          let lengthOfValue = value.length;
          let result =0;

          for(let i=0; i < lengthOfValue; i++){
               switch(value[i]){
                    case '+': {
                     result = this.sum(+firstValue + +value.substring(i, lengthOfValue-1));
                          break;
                    }
                    default:{
                         firstValue+= value[i];
                         }
               }
                    return result;
          } 

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
     it("Should show a complet operation", ()=>{
     //    const calculator = new Calculator()
        expect(calculator.divid(6,3)).toBe(2)
           
     })
});
