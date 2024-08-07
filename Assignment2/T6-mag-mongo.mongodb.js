// *****PLEASE ENTER YOUR DETAILS BELOW*****
// T6-mag-mongo.mongodb.js

// Student ID: 33107327
// Student Name: Lachlan Lu
// Unit Code: FIT3171
// Applied Class No: Applied 03

//Comments for your marker:

// ===================================================================================
// Do not modify or remove any of the comments below (items marked with //)
// ===================================================================================

//Use (connect to) your database - you MUST update xyz001
//with your authcate username

use("lluu0029");

// (b)
// PLEASE PLACE REQUIRED MONGODB COMMAND TO CREATE THE COLLECTION HERE
// YOU MAY PICK ANY COLLECTION NAME
// ENSURE that your query is formatted and has a semicolon
// (;) at the end of this answer

// Drop collection
db.artist_artworks.drop();

// Create collection and insert documents
db.artist_artworks.insertMany([
{"_id":1,"name":"Martainn Jenteau","address":{"street":"328 Forest Pass","city":"Melbourne","state":"VIC"},"phone":"0495300384","no_artworks":3,"artworks":[{"no":3,"title":"Shattered glass","minimum_price":25000},{"no":2,"title":"Boat festival","minimum_price":14500},{"no":1,"title":"The Creation of Adam","minimum_price":30000}]},
{"_id":2,"name":"Kipp Grellis","address":{"street":"2755 Briar Crest Place","city":"South Yarra","state":"VIC"},"phone":"0468858093","no_artworks":1,"artworks":[{"no":1,"title":"The Starry Night","minimum_price":55400}]},
{"_id":3,"name":"Jessi Allward","address":{"street":"9 Becker Plaza","city":"Wallan","state":"VIC"},"phone":"0438843662","no_artworks":1,"artworks":[{"no":1,"title":"Saint francis of Assisi","minimum_price":24500}]},
{"_id":4,"name":"Rosalinda Zavattiero","address":{"street":"1 Del Mar Avenue","city":"Malvern East","state":"VIC"},"phone":null,"no_artworks":1,"artworks":[{"no":1,"title":"The Last Supper","minimum_price":17900}]},
{"_id":5,"name":"Neda Mylchreest","address":{"street":"327 Caliangt Street","city":"Clayton South","state":"VIC"},"phone":"0409562816","no_artworks":2,"artworks":[{"no":1,"title":"the bushes","minimum_price":45000},{"no":2,"title":"The Sojourn","minimum_price":46700.45}]},
{"_id":7,"name":"Weston Stearndale","address":{"street":"39512 Kipling Road","city":"Leongatha","state":"VIC"},"phone":"0417905216","no_artworks":2,"artworks":[{"no":1,"title":"Orange Veils","minimum_price":12900},{"no":2,"title":"Saint Francis of Assisi","minimum_price":34536.9}]},
{"_id":8,"name":"Reeba Wildman","address":{"street":"92542 Service Junction","city":"Malvern East","state":"VIC"},"phone":"0493427245","no_artworks":2,"artworks":[{"no":1,"title":"Girl with a Pearl Earring","minimum_price":23100},{"no":2,"title":"Cafe Terrace at Night","minimum_price":45600.35}]},
{"_id":9,"name":"Marlee Champerlen","address":{"street":"64201 Carey Circle","city":"Clayton South","state":"VIC"},"phone":"0427832032","no_artworks":1,"artworks":[{"no":1,"title":"The Mystic","minimum_price":34000}]},
{"_id":10,"name":"Dorette ","address":{"street":"87596 Porter Place","city":"Lysterfield","state":"VIC"},"phone":"0487345845","no_artworks":1,"artworks":[{"no":1,"title":"The Scientist","minimum_price":24000}]}]);

// List all documents you added
db.artist_artworks.find();

// (c)
// PLEASE PLACE REQUIRED MONGODB COMMAND/S FOR THIS PART HERE
// ENSURE that your query is formatted and has a semicolon
// (;) at the end of this answer


// (d)
// PLEASE PLACE REQUIRED MONGODB COMMAND/S FOR THIS PART HERE
// ENSURE that your query is formatted and has a semicolon
// (;) at the end of this answer

// Show document before new artwork for Weston Stearndale is added


// Add new artwork


// Illustrate/confirm changes made

