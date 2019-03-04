$(document).ready(function() {
	//Ajax call would render the data from the url specified
$.ajax({
    url: 'https://personio-fe-test.herokuapp.com/api/v2/candidates', //I have taken the data dynamically from the user by parsing the JSON file into required format into the table body.
    type: "get",
    dataType: "json",   
    success: function(jsondata) {
    var counter = jsondata.data.length;
    for (var i = 0; i < counter; i++) {
		drawRow(jsondata.data[i]);
    }
	// Display the retrived data in Table Body structure
	function drawRow(rowData) {
    $('#hrtable tbody').append('<tr><td>'+rowData.name+'</td><td>'
	+rowData.email+'</td><td>'+rowData.birth_date+'</td><td>'+rowData.year_of_experience+'</td><td>'
	+rowData.position_applied+'</td><td>'+rowData.application_date+'</td><td>'+rowData.status+'</td></tr>');
}
$("#hrtable" ).DataTable({
	                
                    filter:false,
					aaSorting : [3, 'asc'], //Sorting of table could be performed by clicking on arrow keys/column headers. By default I have kept "Position Applied" column aligned in ascending order.Furthur,Other columns sorting can be performed by using arrow keys.
					info:false,
					responsive: true,
					paging: false,
					"searching": true					
});
    }
    });
});
