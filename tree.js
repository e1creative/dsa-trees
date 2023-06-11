/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sumThis = [];
    let toSearch = this.root ? [this.root] : [];

    while (toSearch.length) {
      let currentNode = toSearch.pop();

      sumThis.push(currentNode.val);

      for (let child of currentNode.children) {
        toSearch.push(child);
      }
    }

    function sumNums(arr) {
      if (arr.length === 0) return 0;

      return arr[0] + sumNums(arr.slice(1));
    }

    return sumNums(sumThis);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;
    let toSearch = this.root ? [this.root] : [];
    while (toSearch.length) {
      let currentNode = toSearch.pop();

      if (currentNode.val % 2 === 0) count++;

      for (let child of currentNode.children) {
        toSearch.push(child);
      }
    }

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    let toSearch = this.root ? [this.root] : [];

    while (toSearch.length) {
      let currentNode = toSearch.pop();

      if (currentNode.val > lowerBound) count++;

      for (let child of currentNode.children) {
        toSearch.push(child);
      }
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };
