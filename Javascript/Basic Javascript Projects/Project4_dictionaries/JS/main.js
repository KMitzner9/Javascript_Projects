function my_Dictionary() {      // create a dictionary for a circus artist
    var Artist = {
        Name:"Ari",         //add KVPs
        Age: "21",
        Apparatus: "Aerial Silks",
        Floor_skill: "Tumbling"
    };
    delete Artist.Apparatus;        // delete one KVP
    document.getElementById("Dictionary").innerHTML = Artist.Name + " is a circus artist specializing in " + Artist.Apparatus + " and " + Artist.Floor_skill; //display the artist name and skills
}