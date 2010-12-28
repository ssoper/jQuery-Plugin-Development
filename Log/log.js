log = function(msg) {
  if (typeof(console) == 'undefined') {
    alert(msg);
  } else {
    console.log(msg);
  }

  return false;
}
