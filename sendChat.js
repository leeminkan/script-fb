const send_nodejsFetch = fetch("https://m.facebook.com/messages/send", {
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": "sb=4cUYYCBTv8C7W0kMkcEwfsjz; datr=4cUYYDT0tnT9573gXEfxIFVM; dpr=1.25; c_user=100036866805730; xs=32%3AGI0PyPouGzqqDA%3A2%3A1612236343%3A-1%3A-1%3A%3AAcW7UAd36evNb8Iw1tjN3MonVmPMKU4-dtVNW6J-nQ; fr=1sTsHV4sUiLC3iFLF.AWVgpaeMs1KEz4LviC4lonl7Rlc.BgGMXh.P4.AAA.0.0.BgGkUQ.AWUeJHUhNb8; spin=r.1003258133_b.trunk_t.1612334352_s.1_v.2_; m_pixel_ratio=1.25; x-referer=eyJyIjoiL2xlbWluaGFuMTk5OD9yZWY9d2l6YXJkIiwiaCI6Ii9sZW1pbmhhbjE5OTg%2FcmVmPXdpemFyZCIsInMiOiJtIn0%3D; wd=1519x792"
    },
    "referrer": "https://m.facebook.com/leminhan1998?ref=wizard",
    "referrerPolicy": "origin-when-cross-origin",
    "body": "ids%5B100007706580842%5D=100007706580842&body=Test&fb_dtsg=AQHOYDjjTeEw%3AAQEL1GY2vU1l&__a=",
    "method": "POST",
    "mode": "cors"
});

const send_body = {
    "ids[100007706580842]": 100007706580842,
    body: Test,
    fb_dtsg: "AQHOYDjjTeEw:AQEL1GY2vU1l",
}

const send_response = { "payload": { "actions": [{ "cmd": "replace", "target": "messaging_compose_error", "html": "\u003Cdiv id=\"messaging_compose_error\">\u003C\/div>", "replaceifexists": false, "allownull": false }, { "cmd": "append", "target": "static_templates", "html": "", "replaceifexists": true }], "ajax_response_token": null, "contentless_response": false, "hsrp": { "hblp": { "sr_revision": 1003258277, "consistency": { "rev": 1003258277 } } } } }

// ===================== REAL

const request = fetch("https://m.facebook.com/messages/send/?icm=1&entrypoint=jewel&surface_hierarchy=unknown&refid=12&ref=wizard", {
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-msgr-region": "PRN",
        "x-requested-with": "XMLHttpRequest",
        "x-response-format": "JSONStream",
        "cookie": "sb=4cUYYCBTv8C7W0kMkcEwfsjz; datr=4cUYYDT0tnT9573gXEfxIFVM; dpr=1.25; c_user=100036866805730; spin=r.1003258133_b.trunk_t.1612334352_s.1_v.2_; xs=32%3AGI0PyPouGzqqDA%3A2%3A1612236343%3A-1%3A-1%3A%3AAcXl1NlxfkNGDIhkAd0KchcwTstScKquL5xPxlnUvw; fr=1sTsHV4sUiLC3iFLF.AWVNwhd9MBYq2dDR_Bth4nhjfsI.BgGMXh.P4.AAA.0.0.BgGlMj.AWVf7ONheWs; m_pixel_ratio=1; x-referer=eyJyIjoiL21lc3NhZ2VzL3JlYWQvP3RpZD1jaWQuYy4xMDAwMDc3MDY1ODA4NDIlM0ExMDAwMzY4NjY4MDU3MzAmZW50cnlwb2ludD1qZXdlbCZzdXJmYWNlX2hpZXJhcmNoeT11bmtub3duJnJlZj13aXphcmQiLCJoIjoiL21lc3NhZ2VzL3JlYWQvP3RpZD1jaWQuYy4xMDAwMDc3MDY1ODA4NDIlM0ExMDAwMzY4NjY4MDU3MzAmZW50cnlwb2ludD1qZXdlbCZzdXJmYWNlX2hpZXJhcmNoeT11bmtub3duJnJlZj13aXphcmQiLCJzIjoibSJ9; wd=1360x695"
    },
    "referrer": "https://m.facebook.com/messages/read/?tid=cid.c.100007706580842%3A100036866805730&entrypoint=jewel&surface_hierarchy=unknown&ref=wizard",
    "referrerPolicy": "origin-when-cross-origin",
    "body": "tids=cid.c.100007706580842%3A100036866805730&wwwupp=C3&ids%5B100007706580842%5D=100007706580842&body=hi%20nha&waterfall_source=message&action_time=1612339895974&m_sess=&fb_dtsg=AQEDDTEaXX_F%3AAQHJGayNizil&jazoest=22099&__dyn=1KQEGiFoO13DzUjxC2GfGh0BBBgS5UqxKcwRxG9xu3Za1FwKwSwMxW0Horx64o720EEe8hwaG3G0Joeoe852q3q5U2nweS787S78K1Jwt8-0mWeKdwbK0JE52229wcq0C9EdE2IzUuw9O1Awci1qw8W1uwbG&__csr=&__req=t&__a=AYneKfNzWTw0475CM4mdzIzni5sPJh8yB1Z2h9NERvsfjQg2X4UINfJ5bl90a6vdUxc2I8BeFlMhlo6qgu7X_7UwvCW5NHoRtXjA1ErW93DfRg&__user=100036866805730",
    "method": "POST",
    "mode": "cors"
});

const response = { "payload": { "actions": [{ "cmd": "replace", "target": "messaging_compose_error", "html": "\u003Cdiv id=\"messaging_compose_error\">\u003C\/div>", "replaceifexists": false, "allownull": false }, { "cmd": "append", "target": "static_templates", "html": "", "replaceifexists": true }], "ajax_response_token": "w-PFu8AlQVF_HklQuZ4MGC9PDlZNRShw", "contentless_response": false, "hsrp": { "hblp": { "sr_revision": 1003258277, "consistency": { "rev": 1003258277 } } } } }

const body = {
    tids: "cid.c.100007706580842:100036866805730",
    wwwupp: "C3",
    "ids[100007706580842]": "100007706580842",
    body: "hi nha",
    waterfall_source: "message",
    action_time: "1612339895974",
    m_sess: "",
    fb_dtsg: "AQEDDTEaXX_F:AQHJGayNizil",
    jazoest: 22099,
    __dyn: "1KQEGiFoO13DzUjxC2GfGh0BBBgS5UqxKcwRxG9xu3Za1FwKwSwMxW0Horx64o720EEe8hwaG3G0Joeoe852q3q5U2nweS787S78K1Jwt8-0mWeKdwbK0JE52229wcq0C9EdE2IzUuw9O1Awci1qw8W1uwbG",
    __csr: "",
    __req: t,
    __a: AYneKfNzWTw0475CM4mdzIzni5sPJh8yB1Z2h9NERvsfjQg2X4UINfJ5bl90a6vdUxc2I8BeFlMhlo6qgu7X_7UwvCW5NHoRtXjA1ErW93DfRg,
    __user: 100036866805730,
}

// ==========================

const nodejsFetch2 = fetch("https://m.facebook.com/chat/thread_info/?other_user_fbids[0]=100007706580842", {
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "x-response-format": "JSONStream",
        "cookie": "sb=4cUYYCBTv8C7W0kMkcEwfsjz; datr=4cUYYDT0tnT9573gXEfxIFVM; dpr=1.25; c_user=100036866805730; xs=32%3AGI0PyPouGzqqDA%3A2%3A1612236343%3A-1%3A-1%3A%3AAcW7UAd36evNb8Iw1tjN3MonVmPMKU4-dtVNW6J-nQ; fr=1sTsHV4sUiLC3iFLF.AWVgpaeMs1KEz4LviC4lonl7Rlc.BgGMXh.P4.AAA.0.0.BgGkUQ.AWUeJHUhNb8; spin=r.1003258133_b.trunk_t.1612334352_s.1_v.2_; m_pixel_ratio=1.25; x-referer=eyJyIjoiL2xlbWluaGFuMTk5OD9yZWY9d2l6YXJkIiwiaCI6Ii9sZW1pbmhhbjE5OTg%2FcmVmPXdpemFyZCIsInMiOiJtIn0%3D; wd=1519x792"
    },
    "referrer": "https://m.facebook.com/leminhan1998?ref=wizard",
    "referrerPolicy": "origin-when-cross-origin",
    "body": "m_sess=&fb_dtsg=AQHIYyKhzzMF%3AAQEq8LNW630E&jazoest=21976&__dyn=1KQEGiFodUoxu4U4ifGh0BBBgS5UqAxqcyoaU98nw_K363u2W3q327HzE24xm6Uhx61Mz83ex61iw9a0iy1gCwSxu0BU3JxO1TBxObwro7ifw5KzHzo5q1AwgE7e1gwwyo36w9yq3q0H8-7E2swp82vwAwmE2ewnE2Ww&__csr=&__req=6k&__a=AYklgnmEV-u35WR7m4IRrRRXWWGxGXspG7UCQ_Qq4_L-rdmT3RqhlE3mXBE-bk21EzdxpqaaUGxkRMLqCkKDmglUDfdV7xvBKy8inG9OlCDwPQ&__user=100036866805730",
    "method": "POST",
    "mode": "cors"
});

const response2 = { "payload": { "actions": [{ "cmd": "append", "target": "static_templates", "html": "", "replaceifexists": true }], "ajax_response_token": "GvspjvEBvhP3Tp3PLymDdzue8Y-9VBdn", "contentless_response": false, "hsrp": { "hblp": { "sr_revision": 1003258277, "consistency": { "rev": 1003258277 } } }, "payload": { "profiles": { "100007706580842": { "thread_name": "Kan LeeMin", "participant_ids": [100007706580842, 100036866805730], "has_thread_image": false, "work_foreign_participant_ids": [], "is_canonical": true, "href": "\/messages\/read\/?tid=cid.c.100007706580842\u00253A100036866805730", "unread_count": 2, "pages_is_flagged": false } } } } }

// =========================

const nodejsFetch3 = fetch("https://m.facebook.com/chat/user_info/?ids[0]=100036866805730", {
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "x-response-format": "JSONStream",
        "cookie": "sb=4cUYYCBTv8C7W0kMkcEwfsjz; datr=4cUYYDT0tnT9573gXEfxIFVM; dpr=1.25; c_user=100036866805730; xs=32%3AGI0PyPouGzqqDA%3A2%3A1612236343%3A-1%3A-1%3A%3AAcW7UAd36evNb8Iw1tjN3MonVmPMKU4-dtVNW6J-nQ; fr=1sTsHV4sUiLC3iFLF.AWVgpaeMs1KEz4LviC4lonl7Rlc.BgGMXh.P4.AAA.0.0.BgGkUQ.AWUeJHUhNb8; spin=r.1003258133_b.trunk_t.1612334352_s.1_v.2_; m_pixel_ratio=1.25; x-referer=eyJyIjoiL2xlbWluaGFuMTk5OD9yZWY9d2l6YXJkIiwiaCI6Ii9sZW1pbmhhbjE5OTg%2FcmVmPXdpemFyZCIsInMiOiJtIn0%3D; wd=1519x792"
    },
    "referrer": "https://m.facebook.com/leminhan1998?ref=wizard",
    "referrerPolicy": "origin-when-cross-origin",
    "body": "m_sess=&fb_dtsg=AQHIYyKhzzMF%3AAQEq8LNW630E&jazoest=21976&__dyn=1KQEGiFodUoxu4U4ifGh0BBBgS5UqAxqcyoaU98nw_K363u2W3q327HzE24xm6Uhx61Mz83ex61iw9a0iy1gCwSxu0BU3JxO1TBxObwro7ifw5KzHzo5q1AwgE7e1gwwyo36w9yq3q0H8-7E2swp82vwAwmE2ewnE2Ww&__csr=&__req=6l&__a=AYklgnmEV-u35WR7m4IRrRRXWWGxGXspG7UCQ_Qq4_L-rdmT3RqhlE3mXBE-bk21EzdxpqaaUGxkRMLqCkKDmglUDfdV7xvBKy8inG9OlCDwPQ&__user=100036866805730",
    "method": "POST",
    "mode": "cors"
});

const response3 = { "payload": { "actions": [{ "cmd": "append", "target": "static_templates", "html": "", "replaceifexists": true }], "ajax_response_token": "GvspjvEBvhP3Tp3PLymDdzue8Y-9VBdn", "contentless_response": false, "hsrp": { "hblp": { "sr_revision": 1003258277, "consistency": { "rev": 1003258277 } } }, "payload": { "profiles": { "100036866805730": { "id": "100036866805730", "name": "An L\u00ea Minh", "firstName": "An", "vanity": "leminhan1998", "thumbSrc": null, "uri": "\/leminhan1998", "gender": 2, "i18nGender": 1, "type": "user", "is_friend": false, "mThumbSrcSmall": "https:\/\/scontent.fsgn3-1.fna.fbcdn.net\/v\/t1.30497-1\/cp0\/e15\/q65\/c16.0.56.56a\/p56x56\/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=2&_nc_sid=0c64ff&efg=eyJpIjoidCJ9&_nc_ohc=nXklHRRYuigAX9UexQb&_nc_ht=scontent.fsgn3-1.fna&tp=5&oh=7b98fe07b165183a7a21a42b9af81b77&oe=604115E6", "mThumbSrcLarge": "https:\/\/scontent.fsgn3-1.fna.fbcdn.net\/v\/t1.30497-1\/cp0\/e15\/q65\/c22.0.74.74a\/p74x74\/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=2&_nc_sid=0c64ff&efg=eyJpIjoidCJ9&_nc_ohc=nXklHRRYuigAX9UexQb&_nc_ht=scontent.fsgn3-1.fna&tp=5&oh=06b034a8529736112f54d5573f96286a&oe=603F0D8E", "dir": null, "searchTokens": ["L\u00ea", "Minh", "An"], "alternateName": "", "is_nonfriend_messenger_contact": true, "is_blocked": false } } } } }

// ===========================

const nodejsFetch4 = fetch("https://m.facebook.com/a/bz?m_sess=&fb_dtsg=AQHIYyKhzzMF%3AAQEq8LNW630E&jazoest=21976&__dyn=1KQEGiFodUoxu4U4ifGh0BBBgS5UqAxqcyoaU98nw_K363u2W3q327HzE24xm6Uhx61Mz83ex61iw9a0iy1gCwSxu0BU3JxO1TBxObwro7ifw5KzHzo5q1AwgE7e1gwwyo36w9yq3q0H8-7E2swp82vwAwmE2ewnE2Ww&__csr=&__req=6m&__a=AYklgnmEV-u35WR7m4IRrRRXWWGxGXspG7UCQ_Qq4_L-rdmT3RqhlE3mXBE-bk21EzdxpqaaUGxkRMLqCkKDmglUDfdV7xvBKy8inG9OlCDwPQ&__user=100036866805730", {
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "multipart/form-data; boundary=----WebKitFormBoundarypQCVw0Qe6OnqHxH7",
        "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "x-response-format": "JSONStream",
        "x_fb_background_state": "1",
        "cookie": "sb=4cUYYCBTv8C7W0kMkcEwfsjz; datr=4cUYYDT0tnT9573gXEfxIFVM; dpr=1.25; c_user=100036866805730; xs=32%3AGI0PyPouGzqqDA%3A2%3A1612236343%3A-1%3A-1%3A%3AAcW7UAd36evNb8Iw1tjN3MonVmPMKU4-dtVNW6J-nQ; fr=1sTsHV4sUiLC3iFLF.AWVgpaeMs1KEz4LviC4lonl7Rlc.BgGMXh.P4.AAA.0.0.BgGkUQ.AWUeJHUhNb8; spin=r.1003258133_b.trunk_t.1612334352_s.1_v.2_; m_pixel_ratio=1.25; x-referer=eyJyIjoiL2xlbWluaGFuMTk5OD9yZWY9d2l6YXJkIiwiaCI6Ii9sZW1pbmhhbjE5OTg%2FcmVmPXdpemFyZCIsInMiOiJtIn0%3D; wd=1519x792"
    },
    "referrer": "https://m.facebook.com/leminhan1998?ref=wizard",
    "referrerPolicy": "origin-when-cross-origin",
    "body": "------WebKitFormBoundarypQCVw0Qe6OnqHxH7\r\nContent-Disposition: form-data; name=\"ts\"\r\n\r\n1612337738838\r\n------WebKitFormBoundarypQCVw0Qe6OnqHxH7\r\nContent-Disposition: form-data; name=\"q\"\r\n\r\n[{\"app_id\":\"412378670482\",\"posts\":\"mwa4W1siZmFsY286d2ViX3RpbWVfc3BlbnRfYml0X2FycmF5Iix7ImUiOnsic3RhcnQFI0AiOjE2MTIzMzc3MzcsInRvcw0qFDpbMSwwXQkSGGN1bSI6NzIJDSxpZCI6IjhkMzhlZiIJEhRsZW4iOjEJDExzZXEiOjMwLCJfbSI6IjEifSwicgUdATbwzCRefEFjWUZTVWVvelFBa2J0V0s2UTRnUkw0Y0ppUUV5c2lqRGpMMzZ4QU41bEJRdnFrWEVONGRDWFhPRWYzMDZ5N2NYeThRTlg5MjJSekt1bncyUGpzR2lsTGF1d1g4VWVFfGZkLkFjYkRabS0xempSbVItdHdwM2NOTWZWYzJmaVhkZFdWUG5LTmRhOHNuX3REeElEU0lQTXloNkt3NGVGbE5mUlR3V00yYnJqZ1ExbXhyWFE3SC1hNzdDOVoiLCJzIjoiOjR3YjFyNjotAwh9LDEtQEQwOTM5NC4xOCwwLDMzOF0sWyLujQEAOClQKbcAOkKNAQAzCR+OjQEAMf6NAf6NAf6NAc6NATwxMDA3My40MywwLDMzOF1d\",\"user\":\"100036866805730\",\"webSessionId\":\":4wb1r6:8d38ef\",\"trigger\":\"falco:web_time_spent_bit_array\",\"send_method\":\"ajax\",\"compression\":\"snappy_base64\",\"snappy_ms\":1}]\r\n------WebKitFormBoundarypQCVw0Qe6OnqHxH7--\r\n",
    "method": "POST",
    "mode": "cors"
});

const response4 = { "payload": { "actions": [{ "cmd": "append", "target": "static_templates", "html": "", "replaceifexists": true }], "ajax_response_token": "GvspjvEBvhP3Tp3PLymDdzue8Y-9VBdn", "contentless_response": false, "hsrp": { "hblp": { "sr_revision": 1003258277, "consistency": { "rev": 1003258277 } } } } }