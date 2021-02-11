const cookie = document.cookie;
const fromUID = cookie.match(/c_user=(\d+)/)[1];
const toUID = "100036866805730";
const dtsg = document.getElementsByName("fb_dtsg")[0].value;
const content = "hi nha...";

const send_message = fetch("https://m.facebook.com/messages/send", {
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": cookie
    },
    "referrerPolicy": "origin-when-cross-origin",
    // "referrer": "https://m.facebook.com/leeminkan1998?ref=wizard",
    "body": `ids%5B${toUID}%5D=${toUID}&body=${content}&fb_dtsg=${dtsg}&__a=`,
    "method": "POST",
    "mode": "cors"
});
