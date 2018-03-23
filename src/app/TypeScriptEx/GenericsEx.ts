class CompareConsumer {
    main(): void {
        //let compareObj = new Compare();
        //compareObj.CompareVals(15,15);

        let compareObj = new Compare<string>();
        compareObj.CompareVals("as","dfdf");

    }
}

class Compare<T> {
    CompareVals(val1: T, val2: T): void {
        if(val1==val2){
            console.log(val1+" and "+val2+" are equal");
        }else{
            console.log(val1+" and "+val2+" are not equal");
        }
    }    
}


// class Compare {
//     CompareVals(val1: number, val2: number): void {
//         if(val1==val2){
//             console.log(val1+" and "+val2+" are equal");
//         }else{
//             console.log(val1+" and "+val2+" are not equal");
//         }
//     }

//     CompareStringVals(val1: string, val2: string): void {
//         if(val1==val2){
//             console.log(val1+" and "+val2+" are equal");
//         }else{
//             console.log(val1+" and "+val2+" are not equal");
//         }
//     }
// }