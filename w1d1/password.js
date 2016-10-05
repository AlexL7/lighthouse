function obfuscate(password){
  var newpass = "";
  for (var i = 0; i < password.length ;i ++) {
    var pos = password.charAt(i);

    if( pos == "a"){
      newpass += "4";
    }
    else if( pos == "e"){
      newpass += "3";
    }
    else if (pos == "o"){
      newpass += "0";
    }
    else if (pos == "l"){
      newpass += "1";
    }
    else{
      newpass += pos;
    }
  }

  return newpass
}
