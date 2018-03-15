function Add(a:number,b:number):number {
 
 
 let myAdd:(a:number,b:number)=>number=function (a:number,b:number):number {
     return a+b;
 }
var aa = function(a:number,b:number){
return a+b;
}
let res = Add2(25,20,30);
let res2 = Add2(25,20);

let res3 = Add3(25,20,30)
let res4 = Add3(25,20);
 return a+b;
}


function Add2(a:number,b:number,c?:number):number {
    return 0;
}

function Add3(a:number,b:number,c:number = 10):number {
    var arr = [25,26,3,5];
    let aaa = Add4(25,26,3,5);
    let aaa2 = Add4(25,26,3,5,45,6,8,9,22);

    return 0;
}

function Add4(...nums:number[]):number {
    let result =0;
    nums.forEach(element => {
        result+=element;
    });
let test:TestClass = new TestClass();
test.someMethod("fdsg");
test.someMethod(25,"vddsfv");
test.someMethod(25,26,"fsdg");

// test.someMethod()
return result;
}

class TestClass {
    someMethod(stringParameter:string):void;
    someMethod(numberParam:number, stringParameter:string):void;
    someMethod(numberParam:number,numParam2:number, stringParameter:string):void;

    someMethod(stringOrNumParam1:any,stringOrNumParam2?:any,stringParam3?:string):void{
        if(stringOrNumParam1 && typeof stringOrNumParam1=="string"){
            console.log("First overload being executed");
        }else if (stringOrNumParam1 && typeof stringOrNumParam1=="number" && stringOrNumParam2 && typeof stringOrNumParam2=="string") {
            console.log("Second overload being executed");
        }
        else if (stringOrNumParam1 && typeof stringOrNumParam1=="number" && stringOrNumParam2 && typeof stringOrNumParam2=="number" && stringParam3 && typeof stringParam3=="string") {
            console.log("Third overload being executed");
        }
    }

}
