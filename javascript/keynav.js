(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.keynav = function(options) {
    	var elements = this;
    	var matrix = [];
    	var current=$(this).find('.selected');
    	console.log(current);
    	current.css({fontSize: '100px'});

	    function update() {
	    	var i=0;
	    	var row = Array();
	    	var j = -1;
	    	var oldtop = false;
	    	var m=Array();

	    	elements.each(function(){
	    		if (!oldtop) oldtop = this.offsetTop;
	    		newtop=this.offsetTop;
	    		if (newtop != oldtop) {
	    			oldtop=newtop;
	    			m[i]=row;
	    			row = Array();
	    			i++;
	    			j=0;
	    			row[j]=this;
	    		} else {
	    			j++;
	    			row[j]=this;
	    		}
	    	});
	    	i++;
	    	m[i]=row;
	    	matrix = m;
	    	console.log(matrix);
	    	return matrix;
	    }

	    $window.bind("resize", function(event) {
            update();
        });

        $(document).ready(function() {
            update();
        });

        return this;
	  }

  })(jQuery, window, document);

$(function(){
  $('.nav_holder a').keynav();
});