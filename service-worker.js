console.log("workeeeeer");
self.addEventListener("message", function (event) {
    //event.source.postMessage("Responding to " + event.data);
    // var d = document.createElement("div");
    // d.innerText = "alper";
    self.clients.matchAll().then(all => {
        all.forEach(client => {
            client.postMessage("Responding to aaa " + all.length + " clients: " + event.data);
        })
    });
});