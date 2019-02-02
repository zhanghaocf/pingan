function typefn(val){
  var cls='';
  switch(val){
    case '普卡':
        cls='commoncard'
    break;
    case '金卡':
        cls='goldcard'
    break;
    case '白金卡':
        cls='whitegoldcard'
    break;
    case '钻石卡':
        cls='diamondcard'
    break;
    case '钛金卡':
        cls='taijincard'
    break;
    case '无限卡':
        cls='unlimitedcard'
    break;
    default:
          cls='commoncard'
    break;
  }
  return cls;
}
const getCls=function(val){
  return typefn(val);
}
export default {
  getCls
};