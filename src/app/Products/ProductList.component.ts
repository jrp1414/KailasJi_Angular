import {Component} from '@angular/core';

@Component({
    selector:'ap-prodlist',
    templateUrl:'./ProductList.component.html'
})
export class ProductListComponent {
    Products:any[]=[
        {ProductId:1,Name:"Monitor", ProdCode:"PR001",Price:252.25,Image:"http://www.coreyscomputing.com/product-images/741-461-410.png"},
        {ProductId:2,Name:"CPU", ProdCode:"PR002",Price:352.25,Image:"https://rukminim1.flixcart.com/image/704/704/cpu/3/c/r/zebronics-cpu-intel-core-i3-4th-gen-4gb-1tb-original-imaegzbmvppg6h9s.jpeg?q=70"},
        {ProductId:3,Name:"Invertor", ProdCode:"PR003",Price:552.25,Image:"http://www.ampsindia.com/ampsindia_files/images/homeups.jpg"},
        {ProductId:4,Name:"Keyboard", ProdCode:"PR004",Price:152.25,Image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/7332/7332059_sd.jpg;maxHeight=640;maxWidth=550"},
        {ProductId:5,Name:"Mouse", ProdCode:"PR005",Price:52.25,Image:"https://assets.logitech.com/assets/64362/3/wireless-mouse-m325.png"},
        {ProductId:6,Name:"Laptop", ProdCode:"PR006",Price:652.25,Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lenovo_G500s_laptop-2905.jpg/290px-Lenovo_G500s_laptop-2905.jpg"}
        
    ];


    getMultiplyResult(val1:number,val2:number):number{
        return val1*val2;
    }

    NameClicked(pr:any):void{
        console.log(pr);
    }
    FlagShowHide:boolean=false;
    ShowHideMsg:string="Show";
    ShowHideImages():void{
        if(this.FlagShowHide){
            this.FlagShowHide=false;            
            this.ShowHideMsg="Show";
        }else{
            this.FlagShowHide=true;
            this.ShowHideMsg="Hide";
        }

    }
}