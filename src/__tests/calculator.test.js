class Calculator {

   calculateValue(value) {
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

      return result ? result : +value
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

const calculator = new Calculator()
describe('#Calculator  functions ', () => {
   it("Should sum two numbers", () => {

      expect(calculator.sum(2.5, 2)).toBe(4.5)

   })
   it("Should subtract two numbers", () => {
      //    const calculator = new Calculator()
      expect(calculator.minus(2, 1)).toBe(1)

   })
   it("Should multiplicate two numbers", () => {
      //    const calculator = new Calculator()
      expect(calculator.times(2, 3)).toBe(6)

   })
   it("Should divid two numbers", () => {
      //    const calculator = new Calculator()
      expect(calculator.divid(6, 3)).toBe(2)

   })
   it("Should show a complet operation without signal", () => {
      const calculator = new Calculator()
      expect(calculator.calculateValue("20420")).toBe(20420)

   })
   it("Should show a complet operation with minus", () => {
      const calculator = new Calculator()
      expect(calculator.calculateValue("20 - 5")).toBe(15)

   })
   it("Should show a complet operation with plus", () => {
      const calculator = new Calculator()
      expect(calculator.calculateValue("20+20")).toBe(40)

   })
   it("Should show a complet operation divid", () => {
      const calculator = new Calculator()
      expect(calculator.calculateValue("20/20")).toBe(1)

   })
   it("Should show a complet operation multiplicate", () => {
      const calculator = new Calculator()
      expect(calculator.calculateValue("00*20")).toBe(0)

   })
});
