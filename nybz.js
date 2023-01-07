/*
rewrite_local
#奶油壁纸
https:\/\/nz-api\.duitang\.com url script-response-body https://gitee.com/fsllala/quan-x/raw/master/nybz.js
MITM = nz-api.duitang.com
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const vip = '/account/me';
if (url.indexOf(vip) != -1) {
    obj.data.vip = true;
    body = JSON.stringify(obj);
}
$done({body});
