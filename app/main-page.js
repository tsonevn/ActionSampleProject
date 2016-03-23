var dialogs = require("ui/dialogs"); 


function onTap(args){
    console.log("button tap");
    dialogs.action({
        massage: "Select new photo",
        cancelButtonText: "cancel",
        actions:["Take photo", "Select from Photo"]
    })
    .then(function(result){
        console.log(result);
    }); 
}

exports.onTap = onTap;