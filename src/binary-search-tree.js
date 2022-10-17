const { NotImplementedError } = require('../extensions/index.js');

/*const { Node } = require('../extensions/list-tree.js');*/

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  data = [];

  root() {
    if (this.data.length > 0) {
      let dataCopy = JSON.parse(JSON.stringify(this));
      dataCopy.data = dataCopy.data[0];
      return dataCopy;
    } else {
      return null;
    }
  }

  add(data) {
    this.data.push(data);
  }

  has(data) {
    return this.data.includes(data);
  }

  find(data) {
    debugger;
    let findElement = this.data.find(item => item == data);
    if (findElement) {
      let dataCopy = JSON.parse(JSON.stringify(this));
      dataCopy.data = data;

      return dataCopy;
    } else {
      return null;
    }
  }

  remove(data) {
    if (this.data.includes(data)) {
      let index = this.data.indexOf(data);
      this.data.splice(index, 1);
    }
  }

  min() {
    if (this.data.length > 0) {
      let newArr = [...this.data];
      newArr.sort((a, b) => a - b);
      return newArr[0];
    } else {
      return null;
    }
  }

  max() {
    if (this.data.length > 0) {
      let newArr = [...this.data];
      newArr.sort((a, b) => a - b);
      return newArr[newArr.length - 1];
    } else {
      return null;
    }
  }
}

module.exports = {
  BinarySearchTree
};