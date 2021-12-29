class HashTable {
  constructor() {
    this.table = Array(127);
    this.size = 0;
  }

  #hash(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  add(key, value) {
    const hash = this.#hash(key);
    if(this.table[hash]) {
      for(let i = 0; i < this.table[hash].length; i++) {
        if(this.table[hash][i][0] === key) {
          this.table[hash][i][1] = value;
          return;
        }
      }
      this.table[hash].push([key, value]);
    } else {
      this.table[hash] = [];
      this.table[hash].push([key, value]);
    }
    this.size++;
  }

  remove(key) {
    const hash = this.#hash(key);
    if (this.table[hash] && this.table[hash].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[hash][i][0] === key) {
          this.table[hash].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }  
  }

  get(key) {
    const hash = this.#hash(key);
    for(let i = 0; i < this.table[hash].length; i++) {
      if(this.table[hash][i][0] === key) {
        return this.table[hash][i][0];
      }
    }
    return null;
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
    console.log('\n');
  }  
}

const hashTable = new HashTable();

hashTable.add('gregory', 'Makelele');
hashTable.add('leo', 'Messi');
hashTable.add('barca', 100);
hashTable.add('gaga', 256);
hashTable.add('agag', 'Newman');

hashTable.display();

hashTable.remove('leo');

hashTable.display();
