let a = ["carbondioxide","nitrogen"]
let b = ["nitrogen","oxygen"]
let c = ["hydrogen","helium"]
let d = ["hydrogen","helium","methane"]

class Person {
  planets = {};
  employees = new Array();
 

  constructor() {}

  addPerson(mercury,venus,earth,jupitor,saturn,uranus) {
     this.employees.push(mercury,venus,earth,jupitor,saturn,uranus)
  }

  getGroupInfo() {
    return this.employees;
  }
  countMoons(){
      let count = 0;
      for(let t of this.employees){
            if(t[3]===true){
                count += t[2]
            }       
      }
      return count;
  }
  
  gasses(){
      let list = "";
      for(let gasList of this.employees){
        let newArray = (gasList[1])
        for(let item of newArray){
            console.log(item)
            }
        }
      }
}

let p1 = new Person();
let mercury = ["mercury","",0,false];
let venus = ["venus",a,0,false];
let earth= ["earth",b,1,false];
let jupitor = ["jupitor",c,79,true];
let saturn = ["saturn",c,83,true];
let uranus = ["uranus",d,27,true];
p1.addPerson(mercury,venus,earth,jupitor,saturn,uranus)
console.log(p1.getGroupInfo())
console.log(p1.countMoons())
