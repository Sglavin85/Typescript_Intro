//Boolean
var isOpen = false;
//String
var myName = "Sean";
//Number
var myAge = 34;
//Array
var list = [1, 2, 3];
//Tuple
var me = ["Sean", 34, false];
//Enum
var Job;
(function (Job) {
    Job[Job["Webdev"] = 0] = "Webdev";
    Job[Job["WebDesigner"] = 1] = "WebDesigner";
    Job[Job["PM"] = 2] = "PM";
})(Job || (Job = {}));
var job = Job.Webdev;
//Any
var phone = "Pixel";
var numberOfPhones = 5;
