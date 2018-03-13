export interface IBook {
    BookId: number;
    BookName?: string;
    GetBookDetails(a: number, b: string): any;
    readonly BookAuthor: string;
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
    }
}

export class BookMaster {
    //private BookId:number;
    protected BookId: number;
    constructor(bookId: number) {
        this.BookId = bookId;
    }
}

export class BookChild extends BookMaster {
    constructor(bookId: number) {
        super(bookId);
    }
}

