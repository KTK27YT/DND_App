//Activates Toasts throughout the page to alert user!

function toast(header, body) {
    $('#toastheader').text(header);
    $('#toastbody').text(body);
    const toastLiveExample = document.getElementById('liveToast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
}