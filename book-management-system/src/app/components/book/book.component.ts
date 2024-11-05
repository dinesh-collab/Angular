import { Component } from '@angular/core';
import { book } from 'src/app/model/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
title:string = '';
author:string = '';

books : book[] = []
ngOnInit(){
  const item = localStorage.getItem('books');
  this.books.push(item ? JSON.parse(item) : [])
}

addBook(){
  const item = {title : this.title,
    author : this.author,
    id: this.books.length + 1
  }
this.books.push(item);
localStorage.setItem('books',JSON.stringify(this.books))
this.title = '';
this.author = '';
}

del(val:any){
  this.books.splice(val,1)
localStorage.setItem('books',JSON.stringify(this.books))

}

}
