//WAP that will take any number of arrays of objects combine them ( if the keys doesn't exist in the previous object then just add that else if the key is existing then concate string values and add the number values ) then return a object of objects.
//example : 
const arr1 = [
    { name: "Joe Brown", goals: 0, assists: 0, points: 0 },
    { name: "Jim Bob", goals: 2, assists: 1, points: 3 },
    { name: "Harry Styles", goals: 1, assists: 1, points: 2 },
    { name: "Craig Mack", goals: 5, assists: 7, points: 12 },
    { name: "Dog", bones: 100 }
];
const arr2 = [
    { name: "Craig Mack", goals: 3, assists: 3, points: 6, ppg: 0, ppa: 0, pims: 0 },
    { name: "Jim Bob", goals: 1, assists: 4, points: 5, ppg: 0, ppa: 1, pims: 0 },
    { name: "Joe Brown", goals: 0, assists: 0, points: 0, ppg: 0, ppa: 0, pims: 0 },
    { name: "Harry Styles", goals: 0, assists: 0, points: 0, ppg: 0, ppa: 0, pims: 0 }
];

result:
{
    "Joe Brown": {"goals": 0, "assists": 0, "points": 0,"ppg": 0, "ppa": 0, "pims": 0 },
    "Jim Bob": { "goals": 3,"assists": 5,"points": 8, "ppg": 0, "ppa": 1,"pims": 0},
    "Harry Styles": { "goals": 1, "assists": 1,"points": 2,  "ppg": 0, "ppa": 0, "pims": 0},
    "Craig Mack": { "goals": 8, "assists": 10, "points": 18, "ppg": 0, "ppa": 0,"pims": 0},
    "Dog": { "bones": 100 }
}
    

       

   
   
   



       
    
   
   

  
   
       
    
   
   
    
    