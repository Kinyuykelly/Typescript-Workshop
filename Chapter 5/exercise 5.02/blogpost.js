"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var blogPostClass = /** @class */ (function () {
    function blogPostClass() {
        this.allPost = [];
    }
    blogPostClass.prototype.addToPost = function (post) {
        this.allPost = __spreadArrays(this.allPost, [
            post
        ]);
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
