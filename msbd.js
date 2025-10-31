var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

obj.data.$isVIP = true;
obj.data.$isValidVip=true;
obj.data.purchaseLength="lifelong";
obj.data.vipExpiration="2029-12-31 23:59:59";
    body = JSON.stringify(obj)
$done({body});
