Most trackers use UDP because of performance reasons. Http is build on top of TCP.
TCP guarantees that when a user sends data, the other user will receive that data in correct order -- but must create persistent connection between users before sending data which can make TCP slower than UDP.
Use TCP for file transfer between peers because those files tend to be larger and must arrive intact.

Part 4:
- now we can get a list of peers, let's download files from them
    1. create a TCP connection with all the peers in your list. The more peers you can get connected to the faster you can download your files.
    2. after peer setup with message exchange, start reqeuesting _pieces_ of the files you want. A torrent's shared files are broken up into pieces so that you can download different parts of the files from different peers simultaneously.
    3. Once we're done receiving a piece from a peer we'll want to request the next piece we need from them. Ideally, you want all the connections to be requesting different and new pieces so you'll need to keep track of which pieces you already have and which ones you still need.
    4. When you receieve the pieces they'll be stored in memory so you'll need to write the data to your hard disk. 

Protcol Overview
- once a tcp connection is established, the messages you send and receive follow the following protocol
  1. let peer know which files you are interested in downloading from them, as well as some identifying info. If peer does not have files you want they will close connection, but if they do they should send back a similar message as confirmation. This is called the "handshake"
  2. Most likely peer will let you know what pieces of the file they have. This happens through the "have" and "bitfield" messages. Each "have" message contains a piece index as its payload. This means you will receive multiple have messages, one for each piece that your peer has. Bitfield messages can tell you all the pieces that the peer has in just one message.
  3. The peer may also decide not to share with you! That's what choke, unchoke, interested, and not interested messages are for. Choked means peer does not want to share, unchoked means peer is willing to share. Interested means you want what your peer has, not interested means you don't want what they have.
  4. At this point you're ready to start requesting. You can do this by sending "request" messages, which contains the index of the piece that you want.
  5. Finally, you will receive a piece message, which will contain the bytes of data that requested. 


- "piece length" property tells you how long a piece is in bytes. Let's say hypothetically that you have a piece length of 1000 bytes. Then if the total size of the file(s) is 12000 bytes, the file should 12 pieces.

