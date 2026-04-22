// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';
import os from 'os';
import { errorLog, infoLog } from './backend/log';


var interfaces = os.networkInterfaces();
function getIPAdress(){

for(var devName in interfaces){
    var iface = interfaces[devName];
    for(var i=0;i<iface.length;i++){
        var alias = iface[i];
        if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
            return alias.address;
        }
    }
}
}
console.log(getIPAdress())
 function getMac(){
    for(var i in interfaces){
        for(var j in interfaces[i]){
            if(interfaces[i][j]["family"]==="IPv4" && (interfaces[i][j]["mac"]!=="00:00:00:00:00:00" || interfaces[i][j]["mac"]!=='00:50:56:c0:00:01' )&& interfaces[i][j]["address"]!=="127.0.0.1"){
            return interfaces[i][j]["mac"]
            }
        }
    }
}
const hostname = os.hostname();//主机名
contextBridge.exposeInMainWorld('electronApi', {
   vtp_get: (key) => ipcRenderer.invoke('store:get', key),
  vtp_set: (key, value) => ipcRenderer.invoke('store:set', key, value),
  send(channel, ...data) {
    ipcRenderer.send(channel, ...data)
  },
  on(channel, fn){
    ipcRenderer.on(channel, fn)
  },
  infoLog: (log)=>ipcRenderer.send('info-log', ...log),
   errorLog: (log)=>ipcRenderer.send('error-log', ...log),
  vtp_ip: getIPAdress(),
  vtp_hostname: hostname,
  vtp_mac: getMac(),
  async vtp_request(config){
    
    const res = await ipcRenderer.invoke('request', config);
      
     console.log(res, config);
     return res;
} 
});