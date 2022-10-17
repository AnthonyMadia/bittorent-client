'use-strict'
const fs = require('fs')
const bencode = require('bencode')

const torrent = bencode.decode(fs.readFileSync('puppy.torrent'))
console.log(torrent.announce.toString('utf8'))
// this will output a udp url and not http 
