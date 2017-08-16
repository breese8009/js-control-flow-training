// console.log("login.js loaded");



let userLogin = {
	userName: "breese",
	password: "bryan"
};

let entry =false;

let c=0;


while(!entry){
	let pw=prompt("please enter your password "+userLogin.password);
	if(userLogin.password!==pw){
		c++;
		alert("incorrect password");
		if(c===3){
			break;
		}
	} else if(userLogin.password===pw){
		entry=true;
		break;

	} 
}
