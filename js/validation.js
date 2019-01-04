
function validateForm() {

	var s= true;

    var x = document.forms["form1"]["name1"].value;
    if (x == "") {
	   	var el=document.getElementById("i1");
		el.placeholder="Имя должно быть введено";
		s=false;
	       
    }

    var y = document.forms["form1"]["email1"].value;
    if (y == "") {
	   	var el=document.getElementById("i2");
		el.placeholder="Почта должно быть введена";
	     s=false;
    }

    var z = document.forms["form1"]["message1"].value;
    if (z == "") {
	   	var el=document.getElementById("i3");
		el.placeholder="Cообщение должно быть введено";
	      s=false;
    }

    if (s == false)
    {

    	return false;
    }


};
