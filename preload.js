const { contextBridge, ipcRenderer, desktopCapturer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getSources: () => desktopCapturer.getSources({ types: ['screen'] }),
  sendEvent: (event, data) => ipcRenderer.send(event, data),
  onEvent: (event, callback) => ipcRenderer.on(event, callback)
});
