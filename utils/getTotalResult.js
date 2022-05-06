const getTotalResult = (res1, res2) => {
    const res = {};
    for(const item in res1){
        res[item] = res1[item].map((x,index)=>{
            if(x == '-')
                return '-';
            return x+res2[item][index];
        })
    }
    return res;
};
  
module.exports = getTotalResult;
  