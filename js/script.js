function generate() {
    var quotes = {
        "- Renato Russo" : '"Nunca deixe que lhe digam que não vale a pena acreditar no sonho que se tem ou que os seus planos nunca vão dar certo ou que você nunca vai ser alguém..."',
        "- Raul Seixas" : '"Não diga que a vitória está perdida se é de batalhas que se vive a vida."',
        "- Cazuza" : '"Se você achar que eu estou derrotado. Saiba que ainda estão rolando os dados... Porque o tempo, o tempo não para!"',
        "- Chorão" : '"Um homem quando está em paz não quer guerra com ninguém"',
        "- Tim Maia" : '"E na vida a gente tem que entender que um nasce pra sofrer enquanto o outro ri"',
        "- Tião Carreiro e Pardinho" : '"Amigo que não presta, faca que não corta. Se eu perder pouco me importa!!"'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)]

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML =author;
}