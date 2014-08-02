export default {
  nodes: [],
  find (selector) {
    this.nodes = Array.from(this.querySelectorAll(selector));
    return this;
  },
  all () { return this.nodes; },
  first ()  { return this.nodes[0]; },
  last () { return this.nodes[this.nodes.length-1]; }
}
