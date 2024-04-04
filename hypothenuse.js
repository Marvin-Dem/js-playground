const an = 5;
const geg = 8;
const hyp = hypothenuse (an , geg);
function hypothenuse (an , geg) {   
    const hyp = Math.sqrt(an*an + geg*geg);  
    return hyp;  
}
const result = hypothenuse (an , geg);
console.log (result);