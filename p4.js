function password(obj){
    if(obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined){
        return "invalid";
    }
    else if(obj.birthYear/1000 < 1.0){
        return "invalid";
    }
    else {
        let site = obj.siteName.slice(0,1);
        site = site.toUpperCase() + obj.siteName.slice(1);
        return site+'#'+obj.name+'@'+obj.birthYear;
    }
}

const obj1 = password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" });
console.log(obj1);

const obj2 = password({ name: "rahat", birthYear: 2002, siteName: "Facebook" });
console.log(obj2);

const obj3 = password({ name: "toky", birthYear: 200, siteName: "Facebook" });
console.log(obj3);

const obj4 = password({ name: "maisha", birthYear: 2002 });
console.log(obj4);