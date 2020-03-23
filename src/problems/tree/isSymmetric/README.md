# IS SYMMETRIC

https://leetcode.com/problems/symmetric-tree/

### DEMO
```js
const isSymmetricTree = {
  val: 1,
  left:
  {
     val: 2,
     left: { val: 3, left: null, right: null },
     right: { val: 4, left: null, right: null } },
  right:
  {
     val: 2,
     left: { val: 4, left: null, right: null },
     right: { val: 3, left: null, right: null } } };


const isNotSymmetricTree = {
  val: 1,
  left:
  {
     val: 2,
     left: { val: 2, left: null, right: null },
     right: null },
  right:
  {
     val: 2,
     left: { val: 2, left: null, right: null },
     right: null } }


isSymmetric(isSymmetricTree);
isNotSymmetricTree(isNotSymmetricTree);
```
