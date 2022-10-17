Most trackers use UDP because of performance reasons. Http is build on top of TCP.
TCP guarantees that when a user sends data, the other user will receive that data in correct order -- but must create persistent connection between users before sending data which can make TCP slower than UDP.
Use TCP for file transfer between peers because those files tend to be larger and must arrive intact.

Part 4:
- now we can get a list of peers, let's download files from them
    1. create a TCP connection with all the peers in your list. The more peers you can get connected to the faster you can download your files.
    2. after peer setup with message exchange, start reqeuesting _pieces_ of the files you want. A torrent's shared files are broken up into pieces so that you can download different parts of the files from different peers simultaneously.
    3. Once we're done receiving a piece from a peer we'll want to request the next piece we need from them. Ideally, you want all the connections to be requesting different and new pieces so you'll need to keep track of which pieces you already have and which ones you still need.
    4. When you receieve the pieces they'll be stored in memory so you'll need to write the data to your hard disk. 

