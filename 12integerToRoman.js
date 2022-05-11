var intToRoman = function(num) {
    const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const roms = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let res = "";
    for(let i=0; num; i++){
        while(num>=vals[i]){
            res+=roms[i];
            num-=vals[i];
        }
    }
    return res;
};