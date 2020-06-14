function sleep(ms) {
ms += new Date().getTime();
while (new Date() < ms){}
} 

sleep(10000);

document.location = "confirmation.html";