function Test() {
    let nums:number[] =[25,26,34,2,8,9,33,46];
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        
    }
    
    for (let index in nums) {
        console.log(nums[index]);
    }

    for (let element of nums) {
        var aa = element >0?"Yes":"No";
    }    
}