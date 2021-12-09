// Heap with it's sorting algorithm realization

class Heap {
  constructor() {
    this.values = [];
  }

  getHeap() {
    return this.values;
  }

  insert(value) {
    this.values.push(value);
    this.shiftUp();
  }

  shiftUp() {
    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    while(this.values[childIndex] < this.values[parentIndex]) {
      const parentValue = this.values[parentIndex];
      this.values[parentIndex] = this.values[childIndex];
      this.values[childIndex] = parentValue;
      childIndex = parentIndex;
      parentIndex = Math.floor((parentIndex - 1) / 2);
    }
  }

  shiftDown() {
    let rootIndex = 0;
    let smallestIndexFromChilds = this.getSmallestChildIndex(rootIndex);
    while(this.values[smallestIndexFromChilds] < this.values[rootIndex]) {
      const childValue = this.values[smallestIndexFromChilds];
      this.values[smallestIndexFromChilds] = this.values[rootIndex];
      this.values[rootIndex] = childValue;
      rootIndex = smallestIndexFromChilds;
      smallestIndexFromChilds = this.getSmallestChildIndex(rootIndex);
    }
  }

  getSmallestChildIndex(rootIndex) {
    let childIndex1 = (rootIndex * 2) + 1;
    let childIndex2 = (rootIndex * 2) + 2;
    let smallestIndexFromChilds;
    if(this.values[childIndex2] < this.values[childIndex1]) {
      smallestIndexFromChilds = childIndex2;
    } else {
      smallestIndexFromChilds = childIndex1;
    }
    return smallestIndexFromChilds;
  }

  heapify(arr) {
    arr.forEach(value => this.insert(value));
  }

  getRoot() {
    const rootValue = this.values.shift();
    this.shiftUp();
    this.shiftDown();
    return rootValue;
  }

  sort() {
    const sortedArray = [];
    const arrLength = this.values.length;
    for(let i = 0; i < arrLength; i++) {
      const smallest = this.getRoot();
      sortedArray.push(smallest);
    }
    return sortedArray;
  }
}

const heap = new Heap();
heap.heapify([13, 5, 10, 9, 8, 7, 3, 1, 5, 2]);

console.log('Sorted array ->', heap.sort());
