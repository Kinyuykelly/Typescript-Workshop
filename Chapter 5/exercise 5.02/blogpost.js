"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var blogPostClass = /** @class */ (function () {
    function blogPostClass() {
        this.allPost = [];
    }
    blogPostClass.prototype.addToPost = function (post) {
        this.allPost = __spreadArray(__spreadArray([], this.allPost, true), [
            post
        ], false);
        return this.allPost;
    };
    return blogPostClass;
}());
var blog = new blogPostClass();
var post1 = { post: 'Goodbye, 2020', timeStamp: 12345678, user: 'Rayon' };
var post2 = { post: 'Welcome, 2021', timeStamp: 12345678, user: 'Mark' };
var post3 = { post: 'What happened to 1999?', timeStamp: 12345678, user: 'Will' };
blog.addToPost(post1);
blog.addToPost(post2);
blog.addToPost(post3);
console.log(blog.allPost);
