let users=[{"id":1,"name":"Leupold","gender":"Male"},
{"id":2,"name":"Jillana","gender":"Female"},
{"id":3,"name":"Farrel","gender":"Male"},
{"id":4,"name":"Rosabelle McLafferty","gender":"Female"},
{"id":5,"name":"Kile","gender":"Male"},
{"id":6,"name":"Gilberto","gender":"Male"},
{"id":7,"name":"Twila","gender":"Female"},
{"id":8,"name":"Lorette","gender":"Female"},
{"id":9,"name":"Nichole","gender":"Male"},
{"id":10,"name":"Phil","gender":"Male"},
{"id":11,"name":"Merrile","gender":"Bigender"},
{"id":12,"name":"Gae","gender":"Female"},
{"id":13,"name":"Wallie","gender":"Female"},
{"id":14,"name":"Adi","gender":"Female"},
{"id":15,"name":"Idell","gender":"Female"},
{"id":16,"name":"Arne","gender":"Male"},
{"id":17,"name":"Alard","gender":"Male"},
{"id":18,"name":"Greer","gender":"Female"},
{"id":19,"name":"Eloise","gender":"Female"},
{"id":20,"name":"Duffy","gender":"Agender"},
{"id":21,"name":"Samara","gender":"Female"},
{"id":22,"name":"Archibaldo","gender":"Polygender"},
{"id":23,"name":"Blair","gender":"Male"},
{"id":24,"name":"Malia","gender":"Non-binary"},
{"id":25,"name":"Cassie","gender":"Polygender"},
{"id":26,"name":"Cacilie","gender":"Female"},
{"id":27,"name":"Meridel","gender":"Female"},
{"id":28,"name":"Niven","gender":"Male"},
{"id":29,"name":"Barnaby","gender":"Male"},
{"id":30,"name":"Dennet","gender":"Male"}]

/*let male_users=[]
users.forEach(emp => {
    if(emp.gender=="Male")
    return male_users.push(emp)
});

console.log(male_users)

users.filter(f_users=>{
    if (f_users.gender=="Female") {
     console.log(f_users)   
    }
})*/

let f_users=users.filter(user=>{
    if (user.gender=="Female") {
        return user
    }
})
console.log(f_users) 