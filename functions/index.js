const functions = require("firebase-functions");
const fetch = require('node-fetch');

exports.clamav = functions.https.onRequest(async (req, res) => {
    var response = await fetch('https://dns.google/resolve?name=current.cvd.clamav.net&type=TXT');
    var json = await response.json();
    res.send(json);
})

exports.resolve = functions.https.onRequest(async (req, res) => {
    var response = await fetch('https://dns.google/resolve?name=current.cvd.clamav.net&type=TXT');
    var json = await response.json();
    res.send(json);
})