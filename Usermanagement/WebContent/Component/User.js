$(document).ready(function()
{ 
if ($("#alertSuccess").text().trim() == "") 
 { 
 $("#alertSuccess").hide(); 
 } 
 $("#alertError").hide(); 
}); 
// SAVE ============================================
$(document).on("click", "#btnSave", function(event) 
{ 
// Clear alerts---------------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
// Form validation-------------------
var status = validateItemForm(); 
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 
// If valid------------------------
 $("#formUser").submit(); 
}); 
// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) 
{ 
 $("#hidItemIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val()); 
 $("#username").val($(this).closest("tr").find('td:eq(0)').text()); 
 $("#institue").val($(this).closest("tr").find('td:eq(1)').text()); 
 $("#phone").val($(this).closest("tr").find('td:eq(2)').text()); 
 $("#email").val($(this).closest("tr").find('td:eq(3)').text()); 
 $("#password").val($(this).closest("tr").find('td:eq(4)').text()); 

}); 
// CLIENT-MODEL================================================================
function validateItemForm() 
{ 
	
// usernamename
if ($("#username").val().trim() == "") 
 { 
 return "Insert Item username."; 
 } 

// insititue-----
if ($("#institue").val().trim() == "") 
 { 
 return "Insert Item institue."; 
 }

// phone-------------------------------
if ($("#phone").val().trim() == "") 
{ 
return "Insert Item phone."; 
}

// email.........
if ($("#email").val().trim() == "") 
{ 
return "Insert Item email."; 
}
// password.........
if ($("#password").val().trim() == "") 
{ 
return "Insert Item password."; 
}


return true; 
}

