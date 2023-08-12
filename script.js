let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    for(let i in arr){
      let value = arr[i]["profession"];
      if(value == 'developer'){
        console.log(arr[i].name);
      }
    }
    //Write your code here , just console.log
  }
  
  function addData() {
    let new_Obj = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(new_Obj);
    console.log(arr);
    //Write your code here, just console.log
  }
  
  function removeAdmin() {
  
    for(let i in arr){
      if(arr[i].profession == "admin"){
        arr.splice(i,1); 
        // or delete arr[i];
      }
    }
    console.log(arr);
  
    //Write your code here, just console.log
  }
  
  function concatenateArray() {
    let brr = [
      { id: 5, name: 'rajini', age: 72, profession: 'developer' },
      { id: 6, name: 'mohanlal', age: 70, profession: 'developer' },
      { id: 7, name: 'mamooka', age: 65, profession: 'developer' },
    ]
    arr = arr.concat(brr);
    // or 
    // for(let i =0;i<brr.length;i++){
    //   arr.push(brr[i]);
    // }
    console.log(arr);
    //Write your code here, just console.log
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }