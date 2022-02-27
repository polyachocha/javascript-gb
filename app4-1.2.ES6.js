'use strict'

//В стиле ES6. Пункт а)

class Post {
    constructor (author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit (text) {
        this.text = text;
    }
}

//Пункт б)

class AttachedPost extends Post {
    constructor (author, text, date) {
        super (author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let post1 = new Post ('Sam', 'Good movie', '02.05.2010');
post1.edit('recommend to watch');
let post2 = new AttachedPost ('David', 'uninteresting movie', '07.11.2011');
post2.edit('not worth watching');
post2.makeTextHighlighted ();