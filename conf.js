var runmanagerpage = require('./Setup/Runmanager.js');
var TC_Titles =  new runmanagerpage();
var TC_names = TC_Titles.getspecs();
var browserName= 'Chrome';
var browserVersion = '58';


exports.config = {
  specs:TC_names,
  
  capabilities: {
	    browserName: 'chrome'
	  },
		
/* plugins: [{
	    package: 'jasmine2-protractor-utils',
	    showColors: true,
	    disableHTMLReport: false,
	    disableScreenshot: false,
	    screenshotPath:'./Reports/screenshots',
	    screenshotOnExpectFailure:false,
	    screenshotOnSpecFailure:false,
	    clearFoldersBeforeTest: true
	  }],*/

	  
  onPrepare: function() {
	  
	  var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
	    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
	  
	    var jasmineReporters = require('jasmine-reporters');
	    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
	        consolidateAll: true,
	        savePath: './Reports',
	        filePrefix: 'xmloutput'
	    }));
	    
	    
	    //////
	    
	    var fs = require('fs-extra');
	    
	    fs.emptyDir('./Reports/screenshots/', function (err) {
	            console.log(err);
	        });
	     
	        jasmine.getEnv().addReporter({
	            specDone: function(result) {
	                //if (result.status == 'failed') {
	                    browser.getCapabilities().then(function (caps) {
	                        var browserName = caps.get('browserName');
	     
	                        browser.takeScreenshot().then(function (png) {
	                            var stream = fs.createWriteStream('./Reports/screenshots/'+browserName+'-'+result.fullName+'.png');
	                            stream.write(new Buffer(png, 'base64'));
	                            stream.end();
	                        });
	                    });
	                //}
	            }
	        });
	    
	    
	    
	    /////
	    
	    
	    
	},
	
	//HTMLReport called once tests are finished 
	onComplete: function() {
	    
	     var capsPromise = browser.getCapabilities();
	 
	     capsPromise.then(function (caps) {
	        browserName = caps.get('browserName');
	        browserVersion = caps.get('version');
	 
	        var HTMLReport = require('protractor-html-reporter');
	 
	        testConfig = {
	            reportTitle: 'Test Execution Report',
	            outputPath: './Reports',
	            screenshotPath: './screenshots',
	            testBrowser: browserName,
	            browserVersion: browserVersion,
	            modifiedSuiteName: false,
	            //takeScreenshots : true,
	           // fixedScreenshotName : true,
	           // consolidate :true,
	            screenshotsOnlyOnFailure: false
	        };
	        new HTMLReport().from('./Reports/xmloutput.xml', testConfig);
	    });
	 }

	
	
	
	
};






