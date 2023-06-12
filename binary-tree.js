/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    let possibleDepths = new Set();

    function traverse(node = this.root, pathLength = 0) {
      // path length defaults to 1 cause we are on a node to start with

      pathLength = pathLength + 1;

      if (node.left) traverse(node.left, pathLength);
      if (node.right) traverse(node.right, pathLength);

      // if there is no right or left, we hit a leaf and we can return our path length
      if (!node.left && !node.right) possibleDepths.add(pathLength);
    }

    traverse(this.root);

    const arr = Array.from(possibleDepths);

    arr.sort();

    return arr[0];
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    let possibleDepths = new Set();

    function traverse(node = this.root, pathLength = 0) {
      // path length defaults to 1 cause we are on a node to start with

      pathLength = pathLength + 1;

      if (node.left) traverse(node.left, pathLength);
      if (node.right) traverse(node.right, pathLength);

      // if there is no right or left, we hit a leaf and we can return our path length
      if (!node.left && !node.right) possibleDepths.add(pathLength);
    }

    traverse(this.root);

    const arr = Array.from(possibleDepths);

    arr.sort();

    return arr[arr.length - 1];
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function traverse(node) {
      if (node === null) return 0;
      const leftSum = traverse(node.left);
      const rightSum = traverse(node.right);

      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    traverse(this.root);

    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    const possibleVals = new Set();

    function traverse(node = this.root) {
      if (node.val > lowerBound) possibleVals.add(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    const arr = Array.from(possibleVals);

    if (arr.length === 0) return null;

    arr.sort();

    return arr[0];
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  // areCousins(node1, node2) {
  //   function traverse(node = this.root, pathLength = 0, min = null) {
  //     console.log(node);

  //     // if there is no right or left, we hit a leaf and we can return our path length
  //     if (!node.left && !node.right) return pathLength;
  //     if (node.left) traverse(node.left);
  //     if (node.right) traverse(node.right);
  //   }

  //   return traverse(this.root);
  // }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  // static serialize() {
  //   function traverse(node = this.root, pathLength = 0, min = null) {
  //     console.log(node);

  //     // if there is no right or left, we hit a leaf and we can return our path length
  //     if (!node.left && !node.right) return pathLength;
  //     if (node.left) traverse(node.left);
  //     if (node.right) traverse(node.right);
  //   }

  //   return traverse(this.root);
  // }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // static deserialize() {
  //   function traverse(node = this.root, pathLength = 0, min = null) {
  //     console.log(node);

  //     // if there is no right or left, we hit a leaf and we can return our path length
  //     if (!node.left && !node.right) return pathLength;
  //     if (node.left) traverse(node.left);
  //     if (node.right) traverse(node.right);
  //   }

  //   return traverse(this.root);
  // }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  // lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
