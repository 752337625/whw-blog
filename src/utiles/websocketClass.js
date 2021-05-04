/**
 * 1.多类型传输
 * 2.多类型接受
 * 3.事件的不同触发时间
 * 4.连接数，以及心跳检测，重新连接
 * 5.websock默认的接受数据类型为blod
 * 6.当服务端主动关闭WebSocket连接时，会通过WebSocket向客户端发送一个close数据包，WebSocket的close事件会触发。那么客户端主动断开连接时，是否
 * 7.在WebSocket建立ws连接时，url可以是域名或者IP地址； 但是当建立的连接是wss（加密WebSocket）时，url必须是域名，因为需要配置相应的证书，而证书是针对域名的。
 */
export default class WebsocketClass {
	ws = null;
	wsURl = null;
	lockReconnect = false;
	timeObj = null;
	timeoutObj=null,
	time = null;
	timeout=null;
	constructor(url, time = 4000,timeout=5000){
			this.wsURl = url
			this.time = time
			this.timeout=timeout
			this.init()
	}
	init() {
		this.ws = new WebSocket(url)
		this.open()
	}
	/**
	 *@description open，WebSocket连接成功后触发的事件
	 */
	open() {
		console.clear()
		this.ws.onopen = () =>{
			console.log(`%c${_this.wsURl} 环境连接成功`, "background-color:#A7EB98;padding:5px;font-size:19px")
			this.timeObj && this.reset();
		} 
		window.onbeforeunload = () =>{
			this.ws.close();
		}
	}
	/**
	 * @description 获取服务端返回数据
	 */
	getMessage() {
		this.ws.onmessage = res => res
	}
	/**
	 * @description 客户端主动推送信息到服务端
	 * @param {Object} binaryType
	 * @param {Object} message
	 */
	send(binaryType, message) {
		this.ws.binaryType = binaryType
		this.ws.send(message)
	}
	/**
	 * @description 客户端主动关闭
	 */
	close() {
		console.clear()
		this.ws.close();
		console.s(`${this.wsURl}当前环境客户端主动关闭`);
	}
	/**
	 * @description 被动关闭
	 * 当服务端主动关闭WebSocket连接时，会通过WebSocket向客户端发送一个close数据包，WebSocket的close事件会触发。
	 */
	onclose() {
		console.clear()
		this.ws.onclose = () =>{
			console.log(`%c${_this.wsURl} 当前环境连接主动或被动关闭`,"background-color:#E6A23C;padding:5px;font-size:19px")
			this.reconnect()
		} 
	}
	/**
	 * @description 用于指定连接失败后的回调函数。
	 */
	onerror() {
		console.clear()
		this.ws.onerror = () => {
			console.error(`%c${this.wsURl}连接失败`, "padding:5px;font-size:19px")
			this.reconnect()
		}
	}
	/**
	 * 重新连接
	 */
	reconnect() {
		if (this.lockReconnect) return
		this.lockReconnect = true;
		this.timeObj && clearTimeout(timeObj);
		this.timeObj = setTimeout(() => {
			console.warn('%c正在重连中...', "padding:5px;font-size:19px");
			this.init();
			this.lockReconnect = false;
		}, this.time);
	}
	/**
	 * 心跳检测
	 */
	heartCheck() {
		let self = this;
		this.timeoutObj && clearTimeout(this.timeoutObj);
		this.timeoutObj = setTimeout(()=>{
			this.send("HeartBeat");
		}, self.timeout)
	}
	/**
	 * 重置
	 */
	reset() {
		clearTimeout(this.timeObj);
		clearTimeout(this.timeoutObj);
	},
}

/**
 * class 静态属性，静态方法
 * 范围:Es5、Es6...
 * class内部定义明确规定没有静态属性，只有静态方法。现class内部静态属性正在提案。
 * 解决：静态属性采用老式：在class外部通过点方式定义：Point.zIndex
 */
