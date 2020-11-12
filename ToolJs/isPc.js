var userAgentInfo = navigator.userAgent;
var Agents = new Array(
  'Android',
  'iPhone',
  'SymbianOS',
  'Windows Phone',
  'iPad',
  'iPod'
);
for (let i = 0; i < Agents.length; i++) {
  if (userAgentInfo.indexOf(Agents[i]) != -1) {
    // phoneFlag = true;
    console.log('移动端');
  } else {
    console.log('pc');
  }
}