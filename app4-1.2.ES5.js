'use strict'

//В стиле ES5. Пункт а)

function Post (author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
};

//Пункт б)

function AttachedPost (author, text, date) {
    Post.call (this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create (Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
};

let post1 = new Post ('Sam', 'Good movie', '02.05.2010');
post1.edit('recommend to watch');
let post2 = new AttachedPost ('David', 'uninteresting movie', '07.11.2011');
post2.edit('not worth watching');
post2.makeTextHighlighted ();
