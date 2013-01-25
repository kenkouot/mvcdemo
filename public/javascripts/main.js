// generic namespacing function
function _ns (str, ns, obj) {
  var parts
    , i;
  ns = ns || window;
  parts = str.split('.');
  for (i = 0; i < parts.length; i++) {
    // if a obj is passed in and loop is assigning last variable in namespace
    if (i === parts.length - 1 && obj) {
      ns = ns[parts[i]] = obj;
   } else {
      // if namespace doesn't exist, instantiate as empty object
      ns = ns[parts[i]] = ns[parts[i]] || {};
    }
  }
  return ns;
}
