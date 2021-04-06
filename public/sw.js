console.log('Service worker loaded')

this.addEventListener('push', e => {
    console.log(e)
    const data = e.data.json();
    console.log("Push Recieved...");
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: data.icon,
        actions: data.actions
    });
  })