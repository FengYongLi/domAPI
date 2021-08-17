window.dom = {
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector)
  },
  style(node, AttrName, AttrValue) {
    if (arguments.length === 3) {
      node.style[AttrName] = AttrValue
    } else if (typeof AttrName === 'string') {
      return node.style[AttrName]
    } else if (AttrName instanceof Object) {
      for (let key in AttrName) {
        node.style[key] = AttrName[key]
      }
    }
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i])
    }
  }
}