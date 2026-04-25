import { describe,expect,test} from 'vitest'
const sum = (a, b) =>{
  return a + b;
}

interface Employee{
    fname: string;
    lname: string;
}

const emp1: Employee = {
    fname: 'revit',
    lname: 'hat'
}
const emp2: Employee = {
    fname: 'andrew',
    lname: 'has'
}
const emp3: Employee = {
    fname: 'andrew3',
    lname: 'has3'
}

const employeelist1 = [];   
employeelist1.push(emp1)
employeelist1.push(emp2)
employeelist1.push(emp3)

describe('test suite1',() =>{
    test('sum function should add two numbers correctly', () => {
  expect(sum(2, 3)).toBe(5);
});
})

describe('test suite2',() =>{

    test('array test', () => {
    const employeelist = [];    
    employeelist.push(emp1);
    employeelist.push(emp2);
    expect(employeelist.length).toBe(2);
});
})

describe('test suite3',() =>{

    test('array test', () => {
    expect(employeelist1.length).toBe(3);    
    //const s = employeelist1.filter((item) => item.name == 'revit');
    const index = employeelist1.findIndex(emp => emp.fname==='revit');
    console.log(index)
    const e = employeelist1.filter((_, i) => i !== index)

    //expect(index).toBe
    //employeelist1.slice(0,index)
    expect(e.length).toBe(2);
    
});
})
