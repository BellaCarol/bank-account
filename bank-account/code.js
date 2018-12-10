//checking bank account

		 var balance = 325.00; 
		 var checkBalance = true; 
		 var isActive = true; 
		
		 /*I want to check my bank card balance or check if my account is still active*/ 

		 if (checkBalance && isActive) 
		 { 
		 	document.write("Wait a moment please, we are checking your balance."); 
		 } 
		 if (balance > 0) 
		 { 
		 	document.write("Your balance is $" + balance); 
		 } else if (!isActive || balance <= 0) 
		 	{ 
		 		document.write("Your account is empty or no longer active."); 
		    } 
		    else
		 	
		 	{ 
		 		document.write("Something went wrong. Please try again.");	
		    }
