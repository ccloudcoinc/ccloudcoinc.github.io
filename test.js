var yummies = ["CharKwayTeow", "TahuGoreng"];
yummies.push("HokkienMee");
yummies.unshift("Laksa");
yummies.reverse();
yummies.splice(1, 3, "CarrotCake");
yummies.slice(2, 4);
console.log(yummies.join(","));

function doMystery(i) {
  let ans = 0;
  while (i > 0) {
    ans = ans * 10 + (i % 10);
    i = Math.floor(i / 10);
  }
  return ans;
}
console.log(doMystery(1234));
console.log('/\\"Quoted"\\/');