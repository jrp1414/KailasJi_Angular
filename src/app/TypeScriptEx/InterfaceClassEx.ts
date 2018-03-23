export interface IBook {
    BookId: number;
    BookName?: string;
    GetBookDetails(a: number, b: string): any;
    readonly BookAuthor: string;
}

export interface IBook2 extends IBook {
    ISBN: string;
}

export class Book implements IBook {
    BookName?: string;
    readonly BookAuthor: string = "scsc";
    BookId: number;

    GetBookDetails(a: number, b: string) {
        //this.BookAuthor="sddgv";
        let bookMaster: BookMaster = new BookMaster(2);
        //console.log(bookMaster.BookId);

        let bookChild: BookChild = new BookChild(3);

        let version: number = BookChild.version;
    }
}

export class BookMaster {
    //private BookId:number;
    protected BookId: number;
    constructor(bookId: number) {
        this.BookId = bookId;
    }
}

// export class BookChild extends BookMaster implements IBook2 {
//     static version:number=25.23;

//     ISBN: string;
//     BookId: number;
//     BookName?: string;
//     GetBookDetails(a: number, b: string) {
//         console.log("");
//     }
//     BookAuthor: string;
//     constructor(bookId: number) {
//         super(bookId);
//     }
// }

export class BookChild implements IBook2 {
    static version: number = 25.23;

    ISBN: string;
    BookId: number;
    BookName?: string;
    GetBookDetails(a: number, b: string) {
        console.log("");
    }
    BookAuthor: string;
    constructor(bookId: number) {
        //super(bookId);
    }
}

