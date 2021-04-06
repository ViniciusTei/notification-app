export default async function serviceWorker()
{
    const publicKey = "BFUBZGQrk_hUUPhteP_R3XT42pZ4mIFoFuJTDLghuspGkqy5lU-5S2PbUACMPqBdiCO2auNGYHEOK0Ihiw89bOc"  
    
    let swUrl=  `${process.env.PUBLIC_URL}/sw.js`
    
    //registering service worker

    const register = await navigator.serviceWorker.register(swUrl, {
        scope: '/'
    })

    console.log('Service Worker Registered..')

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true, 
        applicationServerKey: urlBase64ToUint8Array(publicKey)
    });

    //Aqui ao inves de enviar a notificacao, devemos enviar a subscription
    //Essa ficara armazenada para ser usada no envio da notificacao ao usuario

    //send push notification

    // await fetch('http://localhost:5000/notification', {
    //     method: 'POST',
    //     body: JSON.stringify(subscription),
    //     headers: {
    //         'content-type': 'application/json'
    //     }
    // }).then((res) => console.log(res.body))
    

    console.log('Push sent...')
}

function urlBase64ToUint8Array(base64String: string) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}