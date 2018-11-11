
var lst=[
            {name:'ahmed',age:35,email:'ahmed@mail.com',location:'ksa'},
            {name:'mohammed',age:25,email:'mohammed@mail.com',location:'ksa'},
            {name:'sayed',age:21,email:'sayed@mail.com',location:'uae'},
            {name:'abdullah',age:44,email:'abdullah@mail.com',location:'uae'},
            {name:'mustafa',age:18,email:'mustafa@mail.com',location:'egypt'},
            {name:'wael',age:30,email:'wael@mail.com',location:'egypt'},
            {name:'tamer',age:29,email:'tamer@mail.com',location:'egypt'},
        ];
 var nationalities=(list)=>{
              var natLst=natLst||[];
                 list.map((loc)=>loc.location).reduce((ele,cur)=>{ 
                 ele=ele||[]; 
                 if(ele.indexOf(cur)==-1)
                    ele.push(cur);
                 return ele},[]).forEach(element => {
                     natLst.push({'location':element,
                     'names':list.filter((c)=>c.location==element)});
                 });;
                 return natLst;
                }
var usersFunc=()=>$.ajax({
    url:'https://jsonplaceholder.typicode.com/users',
    type:'get'
})

var callback=(data)=> data;

var viewModel=function(data){
var self=this;
self.persons=ko.observableArray(data);
self.names=ko.observableArray(data.map((p)=>p.name));
var n=data.reduce((objs,person)=>{
    objs=objs||[];
    objs.push('welcome : '+person.name);
    return objs;
},[])
self.welNames=ko.observableArray(n);
self.nationalities=ko.observableArray(nationalities(data));

self.egy=ko.observableArray();
self.users=ko.observableArray();
usersFunc().done(function(res){self.users(res)});


};
ko.applyBindings(new viewModel(lst),document.getElementById('bd'));
