var Tesseract = require('./dist/tesseract.js')


var myImage
Tesseract.recognize(myImage)
.then(function(result){
    console.log(result)
})


