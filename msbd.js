var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const vip = '/account/me';
if (url.indexOf(vip) != -1) {
    obj.data.vip = true;
    body = JSON.stringify(obj);
}
$done({body});
