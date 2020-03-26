class UnionFind {
  constructor() {
    this.id = [];
    this.count = null;
  }
  
  init(N) {
		this.count = N;
		for (let i = 0; i < N; i += 1) {
      this.id[i] = i;
    }
  }
  
  getCount() {
    return this.count;
  }

  connected(p, q) { 
    return this.find(p) === this.find(q);
  }

  find(p) {
    return this.id[p];
  }

  union(p, q) {
		let pID = this.find(p);
		let qID = this.find(q);
    
    if (pID === qID) {
      return null;
    }

		for (let i = 0; i < this.id.length; i += 1) {
      if (this.id[i] === pID) {
        this.id[i] = qID;
      }
    }

		this.count -= 1;
	}
}
