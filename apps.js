function charToBinary(char) {
    var charCode = char.charCodeAt(0) - 97; // Konverton karakteret ne lowercase-ASCII (a=0, b=1, ..., z=25)
    var binary = charCode.toString(2); // Konverton ASCII ne numra binar
    // Shton 0 per mu siguru qe o 5 binar i gjate (5 na vyn veq se z=25 25-binar = 5 numra binar)
    while (binary.length < 5) {
      binary = "0" + binary;
    }
    return binary;
  }
  
  function binaryToChar(binary) {
    var charCode = parseInt(binary, 2) + 97; // Konverton numrat binar ne ASCII 
    var char = String.fromCharCode(charCode); // Konverton ASCII ne karaktere
    return char;
  }
  
  function encrypt(plaintext, key) {
    var ciphertext = "";
    for (var i = 0; i < plaintext.length; i++) {
      var plaintextBinary = charToBinary(plaintext[i]);
      var keyBinary = charToBinary(key[i]);
      var xorResult = "";
      for (var j = 0; j < 5; j++) {
        xorResult += (parseInt(plaintextBinary[j]) ^ parseInt(keyBinary[j])) % 2; // XOR operacioni me bita
      }
      var charCode = parseInt(xorResult, 2);
      if (charCode > 25) {
        charCode -= 26; // Nese rezultati >= 26 ndalon
      }
      ciphertext += String.fromCharCode(charCode + 97); // Konverton ASCII ne karaktere
    }
    return ciphertext;
  }

  function encryptText() {
    var plaintext = document.getElementById("plaintext").value;
    var key = document.getElementById("key").value;
    var ciphertext = encrypt(plaintext, key);
    document.getElementById("outputCiphertext").textContent = ciphertext;
    document.getElementById("output").style.display = "block";
  }
