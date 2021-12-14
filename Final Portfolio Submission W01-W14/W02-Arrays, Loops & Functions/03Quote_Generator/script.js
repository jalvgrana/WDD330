function generate() {
    var quotes = {
        "― Aaron Lauritsen" : '"The struggles we endure today will be the ‘good old days’ we laugh about tomorrow."',
        "― C.S. Lewis" : '“I was not born to be free---I was born to adore and obey.”',
        "― Aaron Lauritsen" : '“There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow.”',
        "― Aaron Lauritsen" : '“True friends don\'t come with conditions.”',
        "― Gustave de Molinari" : '“Just as war is the natural consequence of monopoly, peace is the natural consequence of liberty.”'
    }

    var authors = Object.keys(quotes);
    
    var author = authors[Math.floor(Math.random() * authors.length)];
    
    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;

    document.getElementById("author").innerHTML = author;


}