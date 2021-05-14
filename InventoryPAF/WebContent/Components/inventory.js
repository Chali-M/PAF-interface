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
					var status = validateInventoryForm(); 
					if (status != true) 
				{ 
						$("#alertError").text(status); 
						$("#alertError").show(); 
					return; 
				} 
// If valid------------------------
					$("#formInventory").submit(); 
				}); 
// UPDATE==========================================
					$(document).on("click", ".btnUpdate", function(event) 
				{ 
 $("#hidInventoryIDSave").val($(this).closest("tr").find('#hidInventoryIDUpdate').val()); 
 $("#appName").val($(this).closest("tr").find('td:eq(0)').text()); 
 $("#appSize").val($(this).closest("tr").find('td:eq(1)').text()); 
 $("#reviews").val($(this).closest("tr").find('td:eq(2)').text()); 
 $("#appDes").val($(this).closest("tr").find('td:eq(3)').text()); 
 $("#appType").val($(this).closest("tr").find('td:eq(4)').text()); 
 $("#downloads").val($(this).closest("tr").find('td:eq(5)').text()); 
 
 
}); 
// CLIENT-MODEL================================================================
function validateInventoryForm() 
{ 
// CODE
if ($("#appName").val().trim() == "") 
 { 
 return "Insert App Name."; 
 } 
// NAME
if ($("#appSize").val().trim() == "") 
 { 
 return "Insert app size."; 
 } // PRICE-------------------------------
if ($("#reviews").val().trim() == "") 
{ 
return "Insert reviews."; 
} 

//is numerical value
//var tmpPrice = $("#itemPrice").val().trim(); 
//if (!$.isNumeric(tmpPrice)) 
//{ 
//return "Insert a numerical value for Item Price."; 
//} 
//convert to decimal price
//$("#itemPrice").val(parseFloat(tmpPrice).toFixed(2)); 
//DESCRIPTION------------------------
//if ($("#itemDesc").val().trim() == "") 
//{ 
//return "Insert Item Description."; 
//} 
return true; 
}