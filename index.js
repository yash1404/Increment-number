const counters=document.querySelectorAll("#counter");
counters.forEach((counter)=>{
  //console.log(counter);
  counter.innerHTML=0;

 const updatecount=()=>{
const targetcount= +counter.getAttribute("data-target");
//console.log(targetcount)
const startingnum= +counter.innerHTML;
const incr=targetcount/100; 

if(startingnum<targetcount){
  counter.innerHTML=`${ Math.round(startingnum+incr)}`
  setTimeout(updatecount,10);
}else{
  counter.innerHTML=targetcount;
}

}
updatecount();

})