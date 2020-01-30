

// Save HTML pdf
$(document).ready(function(){
  $(".btn-secondary").click(function(){

    var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.canvas.height = 72 * 11;
	pdf.canvas.width = 72 * 8.5;
	pdf.fromHTML(document.getElementById("print"));
	pdf.save('HTML print.pdf');

    });

});


//Save pdf (using canvas details as image)

$(document).ready(function(){
  $(".btn-primary").click(function(){
   
  	html2canvas(document.getElementById("print"), {
  		onrendered: function(canvas){

  			var img = canvas.toDataURL("image/png");
  			var doc = new jsPDF();
  			doc.addImage(img,'JPEG',-30,50,270,100);
  			doc.save('Print.pdf');
  	  		}
  	}
  	);


  });
});


