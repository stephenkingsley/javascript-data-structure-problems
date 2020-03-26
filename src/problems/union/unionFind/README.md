# unionFind

```js
const matrix = [0,0,[0,1],[0,0,0,0,0,0,0,0,1],[0,0,0,1],[1],[0,0,0,0,0,1],[0,0,1],0,[0,0,0,0,1]];
const vector = [];
matrix.forEach((ele, firstIndex) => {
  if (ele && typeof ele === 'object') {
    const secondIndex = ele.findIndex(node => node === 1);
    if (secondIndex > -1) {
      vector.push([firstIndex, secondIndex]);
    }
  }
});

const uf = new UnionFind();
uf.init(vector.length);
vector.forEach(ele => {
  uf.union(ele[0], ele[1]);
});
console.log(uf.getCount());
```
