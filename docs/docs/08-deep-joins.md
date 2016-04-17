---
id: deep-joins
title: Deep Joins
permalink: deep-joins.html
next: using-generators.html
---

Nodal now supports _deep_ (or _nested_) joins for multiply-nested Models. What this means, is given the hierarchy;

```javascript
Picture.joinsTo(User, {multiple: true});
Post.joinsTo(User, {multiple: true});
Comment.joinsTo(Post, {multiple: true});
Like.joinsTo(Comment, {multiple: true});
```

That can be visualized like so;

```
[User] -> has multiple -> [Post]
  | has multiple            | has multiple
  v                         v
[Picture]                 [Comment]
                            | has multiple
                            v
                          [Like]
```

You can perform something complex like;

```javascript
Picture
  .join('user__posts__comments__likes')
  .end((err, pictures) => {

    // get joined user
    pictures[0].joined('user');
    // get posts of joined user
    pictures[0].joined('user').joined('posts');
    // get comments of joined posts of joined user
    pictures[0]
      .joined('user')
      .joined('posts')[0]
      .joined('comments');
    // it's turtles all the way down
    pictures[0]
      .joined('user')
      .joined('posts')[0]
      .joined('comments')[0]
      .joined('likes');

    this.respond(err || pictures);

  });
```

And if you choose to output an API response;

```
{
  meta: {...},
  data: [
    {
      user: {
        posts: [
          {
            comments: [
              {
                likes: [...]
              }
            ]
          }
        ]
      }
    }
  ]
}
```

So;

```javascript
// get 1st picture, user from pic, 2nd post from user,
//   4th comment from post
response.data[0].user.posts[1].comments[3]
```
