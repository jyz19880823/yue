<?php
// error_reporting(E_ALL);
// set_time_limit(0);
// echo "<h2>TCP/IP Connection</h2>\n";

// $port = 89;
// $ip = "127.0.0.1";

// $socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
// if ($socket < 0) {
// echo "socket_create() failed: reason: " . socket_strerror($socket) . "\n";
// }else {
// echo "OK.\n";
// }

// echo "试图连接 '$ip' 端口 '$port'…\n";
// $result = socket_connect($socket, $ip, $port);
// if ($result < 0) {
// echo "socket_connect() failed.\nReason: ($result) " . socket_strerror($result) . "\n";
// }else {
// echo "连接OK\n";
// }

// $in = "Ho\r\n";
// $in .= "first blood\r\n";
// $out = "";

// if(!socket_write($socket, $in, strlen($in))) {
// echo "socket_write() failed: reason: " . socket_strerror($socket) . "\n";
// }else {
// echo "发送到服务器信息成功！\n";
// echo "发送的内容为:<font color=’red’>$in</font> <br>";
// }

// while($out = socket_read($socket, 89)) {
// echo "接收服务器回传信息成功！\n";
// echo "接受的内容为:",$out;
// }

// echo "关闭SOCKET…\n";
// socket_close($socket);
// echo "关闭OK\n";
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script>
		var socket = new WebSocket("ws://172.16.2.197:8086");
		console.log(socket)
		socket.onmessage=function(msg){
			console.log(msg.data)
		}
		socket.onerror=function(msg){
			console.log(msg)
		}
	</script>
	
</body>
</html>