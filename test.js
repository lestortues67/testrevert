function Send2Server() {
	// console.log(this);
	//Utilisation du keyWord THIS
	
	var DataRef = this.attributes[3].value;
	// DataRef contient la référence de la pizza choisie 
	alert("Buttonclicked ! "+DataRef);
	        req = $.ajax({
            url : '/AddOrderLine',
            type : 'POST',
            data : { PizzaRef : DataRef }
        });

            req.done(function(data) {
        		alert("Data was returned from server : "+data.result+" "+data.datarxd);
            // $('#memberSection'+member_id).fadeOut(1000).fadeIn(1000);
            // $('#memberNumber'+member_id).text(data.member_num);

        });

}


	// var table = document.getElementById("tablecmde");
	// for(var i = 0; i < macommande.length; i++) 
	// 	{var cmdlength=macommande.length;
	// 	var row = table.insertRow(table.rows.length);
	// 	var cell1 = row.insertCell(0);
	// 	cell1.innerHTML = macommande[i].nom; 
	// 	var cell2 = row.insertCell(1);
	// 	cell2.innerHTML = macommande[i].prixt;
	// 	var cell3 = row.insertCell(2);
	// 	var s = document.createElement("input");
	// 	s.src = 'static/YellowEmpty.ico';
	// 	s.type = "image";
	// 	s.id = "btnkiki";
	// 	s.className = 'btn kiki';
	// 	s.dataset.ref = macommande[i].lineId;
	// 	s.addEventListener("click", MyShowAlert);
	// 	cell3.appendChild(s);
	// 	}	
	// var king = 99;       
	// }







var macommande = [{'lineId':0,'nom':"pizza reine",'prixt':"9€95",'prix':9.95,'slien':'s100','linenum':'0'},
{'lineId':1,'nom':"pizza king",'prixt':"9€95",'prix':9.95,'slien':'s200','linenum':'1'},
{'lineId':2,'nom':"pizza mexicaine",'prixt':"10€95",'prix':10.95,'slien':'s300','linenum':'2'},
{'lineId':3,'nom':"pizza saumon",'prixt':"12€95",'prix':12.95,'slien':'s400','linenum':'3'}];

var manewcommande = [{'lineId':0,'nom':"pizza NEWreine",'prixt':"9€95",'prix':9.95,'slien':'s100','linenum':'0'},
{'lineId':1,'nom':"pizza NEWking",'prixt':"9€95",'prix':9.95,'slien':'s200','linenum':'1'},
{'lineId':2,'nom':"pizza NEWmexicaine",'prixt':"10€95",'prix':10.95,'slien':'s300','linenum':'2'},
{'lineId':3,'nom':"pizza NEWsaumon",'prixt':"12€95",'prix':12.95,'slien':'s400','linenum':'3'}];


function Add2Buttons(){
	
	// Find a <table> element with id="tablecmde":
	var macommande = [{'lineId':0,'nom':"pizza reine",'prixt':"9€95",'prix':9.95,'slien':'s100','linenum':'0'},
	{'lineId':1,'nom':"pizza king",'prixt':"9€95",'prix':9.95,'slien':'s200','linenum':'1'},
	{'lineId':2,'nom':"pizza mexicaine",'prixt':"10€95",'prix':10.95,'slien':'s300','linenum':'2'},
	{'lineId':3,'nom':"pizza saumon",'prixt':"12€95",'prix':12.95,'slien':'s400','linenum':'3'}];	

	var myvarbtn1 = document.getElementById("btn1");
	var myvarbtn2 = document.getElementById("btn2");
	var mypar = document.getElementById("p01");

	// Créer un bouton ainsi : 
	//cell3.innerHTML="<button class='btn kiki' data-ref='' onclick='ShowAlert();'> <img src='static/YellowEmpty.ico' alt='FileNotFound' height='42' width='42'> </button>";

	var ccc = 'L00';
	var s = document.createElement("input");
	s.src = 'static/YellowEmpty.ico';
	s.type = "image";
	s.className = 'btn kiki';
	s.dataset.ref = ccc;

	s.addEventListener("click", MyShowAlert);
	mypar.appendChild(s);
	console.dir(s);
							}	//Add2Buttons()
	

function MyShowAlert() {
	alert("Buttonclicked ! ");
}//MyShowAlert()


function DisplayCommande() {
	// console.log(this);
	//Utilisation du keyWord THIS
	// var DataRef = this.dataset['ref'];



	// Find a <table> element with id="tablecmde":
	var table = document.getElementById("tablecmde");
	
	for(var i = 0; i < macommande.length; i++) 
		{var cmdlength=macommande.length;
		// Create an empty <tr> element and add it to the 1st position of the table:
		var row = table.insertRow(table.rows.length);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = macommande[i].nom; 
		var cell2 = row.insertCell(1);
		cell2.innerHTML = macommande[i].prixt;
		var cell3 = row.insertCell(2);
		var s = document.createElement("input");
		s.src = 'static/YellowEmpty.ico';
		s.type = "image";
		s.id = "btnkiki";
		s.className = 'btn kiki';
		s.dataset.ref = macommande[i].lineId;
		s.addEventListener("click", MyShowAlert);
		cell3.appendChild(s);
		}	

	var king = 99;       
	}


function DeleteTableBody() {
  	
	// Find a <table> element with id="tablecmde":
	// document.getElementById("tablecmde").deleteRow(2);
	var myTable = document.getElementById("tablecmde");
	
	var rows = myTable.rows;//HTMLCollection[5]
	for(var ax = rows.length-1; ax > 0; ax--) 
		{
			// $(rows[ax]).empty();
			myTable.deleteRow(ax);
		}
	


	
	for(var i = 0; i < manewcommande.length; i++) 
		{var cmdlength=manewcommande.length;
		// Create an empty <tr> element and add it to the 1st position of the table:
		var row = table.insertRow(table.rows.length);
		var cell1 = row.insertCell(0);
		cell1.innerHTML = manewcommande[i].nom; 
		var cell2 = row.insertCell(1);
		cell2.innerHTML = manewcommande[i].prixt;
		var cell3 = row.insertCell(2);
		var s = document.createElement("input");
		s.src = 'static/YellowEmpty.ico';
		s.type = "image";
		s.id = "btnkiki";
		s.className = 'btn kiki';
		s.dataset.ref = manewcommande[i].lineId;
		s.addEventListener("click", MyShowAlert);
		cell3.appendChild(s);
		}	

	var king = 99;       
	}


function RadioBtnClick() {
  	
	this.parentElement.children[5].innerHTML=this.firstElementChild.firstElementChild.dataset['btntext'];
	// data-btnref

	var trez = this.firstElementChild.firstElementChild.attributes[1].value;

	var kong = this.parentElement.children[5].attributes;
	var king = this.parentElement.children[5].attributes[3].value;

	this.parentElement.children[5].attributes[3].value = trez;

	var tt = this.parentElement.children[5];
	// this.firstElementChild.firstElementChild.dataset['btntext'];

	}

function f_Claire() {


	 document.getElementById("demo").innerHTML = data-texte  ;


}


// a.addEventListener("click", DisplayCommande);
var breez = 9;
// var bibu = document.getElementById('k01');

// Executer la fonction 'DisplayCommande' quand les boutons sont cliqués (<button class="btn btn-primary btncard kika")
// var bibo = document.getElementsByClassName('kika');
// for(var i=0,len=bibo.length;i<len;i++){;
//   bibo[i].addEventListener('click', DisplayCommande , false);
// }




// var btnsuppT = document.getElementById("suppT");
// btnsuppT.addEventListener('click', DeleteTableBody , false);

// Executer la fonction 'f_claire' quand les boutons sont cliqués (<button class="btn btn-primary btncard Claire")
var myClaire = document.getElementsByClassName('claire');
for(var i=0,len=myClaire.length;i<len;i++){;
  myClaire[i].addEventListener('click', f_Claire , false);
}

var freez = 9;

