// ******************************************* //
// Get the Browser type                        //
// ******************************************* //
function funGetBrowserType()
{
    /**********
    ***********/
    var id = 1;   // 1: IE; 2: Firefox; 3: Chrome, 4: Opera
    var browser = '';
    var version = '';
    if (browser == '')
    {
	    if (navigator.appName.indexOf('Microsoft') != -1)
	    {
		    browser = 'IE'
		    id = 1;     
	    }	         
	    else if (navigator.appName.indexOf('Netscape') != -1)
	    {
		    if(navigator.userAgent.indexOf("Firefox")!=-1) 
		    {
			    var versionindex=navigator.userAgent.indexOf("Firefox") + 8
			    if (parseInt(navigator.userAgent.charAt(versionindex))>=1) 
			    {   // Firefox 1.x or above
				    id = 2;
			    }	
		    }
	    }
	    else id = 2;
    }	
    return id;	
}	

// ******************************************* //
// Helper $$ function                           //
// ******************************************* //
function $$(id, document){
	var element = document.getElementById(id);
	if( element == null )
		alert('Programmer error: ' + id + ' does not exist.' );
	return element;
} 



