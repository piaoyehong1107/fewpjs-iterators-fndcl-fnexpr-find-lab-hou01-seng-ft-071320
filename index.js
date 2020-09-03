function superbowlWin(arr){
 const result=arr.find(res=>{return res.result==="W"})
  return result[0].year
}