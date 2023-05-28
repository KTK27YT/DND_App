const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    });
    win.loadFile('index.html');
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})