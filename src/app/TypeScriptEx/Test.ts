export class TestClass
{
    constructor(){
        // Boolean
        let isCompleted:boolean = false;
        //var a = false;

        //Number
        let roll:number = 10;
        let decNum:number = 10.56;
        let hex: number = 0xf00d;
        let binary:number = 0b1000;


        //String
        let name:string = "Ram";


        //Array
        let nums:number[] = [1,2,3,4];
        let nums2:Array<number> = [2,6,35,8,9];

        //Tuple
        let x:[string,number]=["hello",15];
        //x=[10,"vdsv"];

        let col = Color.Blue;

        //Any
        let b:any= 10;

        //void 


        //null and undefined
        let c:null = null;
        let d:undefined= undefined;

        //Object
        let book:BookDto = new BookDto();
        book.BookId=1;
        book.BookName="aaa";

        

        // Variable Declaration
        var e:number = 10;
        e=15;
        let f:string="dvdv";
        const pie:number = 3.14;
        //pie=3.25;
    }

    
}


class BookDto {
    BookId:number;
    BookName:string;
}

function GetData():void {
        
}


export enum Color {
    Red=10,
    Green,
    Blue
}

/*
function(){
-------
------
if(true){
    --var a = 10;
    let a = 20;
}
}    

*/