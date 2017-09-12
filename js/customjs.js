var toggle = true;

$('#datePicker')
.datepicker({
    format: 'mm/dd/yyyy'
});

$('#datePicker2')
.datepicker({
    format: 'mm/dd/yyyy'
});

$('#datePicker3')
.datepicker({
    format: 'mm/dd/yyyy'
});

$(".sidebar-icon").click(function() {                
	if (toggle){
		$(".sidebar-left").addClass("sidebar-collapsed").removeClass("sidebar-collapsed-back");
		$("#menu span").css({"position":"absolute"});
	}
	else {
		$(".sidebar-left").removeClass("sidebar-collapsed").addClass("sidebar-collapsed-back");
		setTimeout(function() {
		  $("#menu span").css({"position":"relative"});
		}, 20);
	}               
		toggle = !toggle;
});


$(".activeBtn, .add-form").hide();
$("#roleName").on("change", function() {
	if($(this).val() == 1){ 
		$(".activeBtn").show();
		$(".activeBtn").text("Inactivate");
	}
	else if($(this).val() == 2){ 
		$(".activeBtn").show();
		$(".activeBtn").text("Activate");
	}
	else{
		$(".activeBtn").hide();
	}
});

$("#addItem").click(function(){
	$(".gridSection").hide();
	$(".add-form").show();
});
$(".instName").hide();
$(".external").click(function() { 
	if($(this).is(":checked")){
		$(".instName").show();
	}else {
		$(".instName").hide();
	}
});
$(".internal").click(function() {
	$(".instName").hide();
});




$(".membersGrid").hide();
$(".topicsGrid").hide();

$(".showMembers").click(function() {
	$(".teamGrid").hide();
	$(".membersGrid").show();
});

$(".showTopics").click(function() {
	$(".membersGrid").hide();
	$(".topicsGrid").show();
});

$("#backFromMembers").click(function() {
	$(".teamGrid").show();
	$(".membersGrid").hide();
});
$("#backFromForm").click(function() {
	$(".teamGrid").show();
	$(".teamForm").hide();
});

$("#addTeam").click(function() {
	$(".teamTable").hide();
	$(".teamForm").show();
});

$("#backFromTopics").click(function() {
	$(".membersGrid").show();
	$(".topicsGrid").hide();
});


$("#gradeList").change(function() {
	if($(this).val() == ""){
		$(".gradeOutput, .gradeOutputOthers").hide();
	}
	if($(this).val() == "College"){
		$("#gradeLabel").html("<span class='required'>*</span>Course Level");
		
	}
	else if($(this).val() == "High School"){ 
		$("#gradeLabel").html("<span class='required'>*</span>Course Level");
	}
	else if($(this).val() == "Middle School"){ 
		$("#gradeLabel").html("<span class='required'>*</span>Course Level");
	}
	else if($(this).val() == "Elementary School"){ 
		$("#gradeLabel").html("<span class='required'>*</span>Course Level");
	}
	else if($(this).val() == "Training"){
		$("#gradeLabel").html("<span class='required'>*</span>Specify");
	} else if($(this).val() == "Other"){
		$("#gradeLabel").html("<span class='required'>*</span>Specify");
	}
});
