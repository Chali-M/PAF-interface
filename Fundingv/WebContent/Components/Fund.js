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
 $("#formFund").submit(); 
}); 
// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) 
{ 
 $("#hidItemIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val()); 
 $("#name").val($(this).closest("tr").find('td:eq(0)').text()); 
 $("#institue").val($(this).closest("tr").find('td:eq(1)').text()); 
 $("#position").val($(this).closest("tr").find('td:eq(2)').text()); 
 $("#projectname").val($(this).closest("tr").find('td:eq(3)').text()); 
 $("#description").val($(this).closest("tr").find('td:eq(4)').text()); 
 $("#fundingtype").val($(this).closest("tr").find('td:eq(5)').text()); 
 $("#amount").val($(this).closest("tr").find('td:eq(6)').text()); 
 $("#accname").val($(this).closest("tr").find('td:eq(7)').text()); 
 $("#accnumber").val($(this).closest("tr").find('td:eq(8)').text()); 
 $("#date").val($(this).closest("tr").find('td:eq(9)').text()); 

}); 
// CLIENT-MODEL================================================================
function validateItemForm() 
{ 
	
// name
if ($("#name").val().trim() == "") 
 { 
 return "Insert Item name."; 
 } 

// insititue-----
if ($("#institue").val().trim() == "") 
 { 
 return "Insert Item institue."; 
 }

// position-------------------------------
if ($("#position").val().trim() == "") 
{ 
return "Insert Item position."; 
}

// project name.........
if ($("#projectname").val().trim() == "") 
{ 
return "Insert Item Projectname."; 
}
// description.........
if ($("#description").val().trim() == "") 
{ 
return "Insert Item description."; 
}
//funding type.........
if ($("#fundingtype").val().trim() == "") 
{ 
return "Insert Item fundingtype."; 
}
//amount.........
if ($("#amount").val().trim() == "") 
{ 
return "Insert fund amount."; 
}
//is numerical value
var tmpPrice = $("#amount").val().trim(); 
if (!$.isNumeric(tmpPrice)) 
{ 
return "Insert a numerical value for amount."; 
} 
//convert to decimal price
$("#amount").val(parseFloat(tmpPrice).toFixed(2)); 

//account number------------------------
if ($("#accname").val().trim() == "") 
{ 
return "Insert Item accname."; 
}
//.........account number
if ($("#accnumber").val().trim() == "") 
{ 
return "Insert Item number."; 
}
//date.........
if ($("#date").val().trim() == "") 
{ 
return "Insert Item date."; 
}

return true; 
}



