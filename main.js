var i = 0;
var images = ["my.jpg", "ME.jpeg", "SISTER.jpeg", "MOM.jpeg", "FATHER.jpeg"];
var names = ["My Family", "ME", "My Sister", "My Mom", "My Father"];

function update() {
    
    i++;
    var family_members = 5
    if (i > family_members) {
        i = 0;
    }
    var Updateimage = images[i];
    var Updatename = names[i];
    document.getElementById("image1").src = Updateimage;
    document.getElementById("names").innerHTML = Updatename;
     }