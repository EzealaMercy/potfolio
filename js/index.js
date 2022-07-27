

function send(){
    var contname = document.getElementById('contname').value;
    var subject = document.getElementById('subject').value;
    var textera = document.getElementById('textera').value;

    if(contname.trim() == ""){
        document.getElementById('contname').style.border= '2px solid crimson';
        return false
    }
    else if(subject.trim()==""){
        document.getElementById('subject').style.border= '2px solid crimson';
        return false;
    }
    else if(textera.trim()==""){
        document.getElementById('textera').style.border= '2px solid crimson'
        return false;
    }
    else{
        alert('Thank you');
        return true;
    }
    
}