const data = [
    ["La seule façon de réaliser l'impossible est de croire que c'est possible.", "Charles Kingsleigh"],
    ["Le succès est la somme de petits efforts répétés jour après jour.", "Robert Collier"],
    ["N'attendez pas. Le temps ne sera jamais juste.", "Napoléon Hill"],
["Vous êtes le maître de votre destin. Vous pouvez influencer, diriger et contrôler votre environnement.", "Napoléon Hill"],
["Ne regardez pas l'horloge ; faites ce qu'elle fait. Continuez d'avancer.", "Sam Levenson"],
["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
["À chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
["Seulement ceux qui prendront le risque d'aller trop loin découvriront jusqu'où on peut aller.", "T.S Elliot"],
["Le succès c'est tomber sept fois, se relever huit.", "Proverbe japonais"],
["Dans vingt ans vous serez plus déçus par les choses que vous n'avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c'est de l'âge.", "Brian Tracy"],
["Quand on concentre son attention sur un seul projet, l'esprit suggère constamment des idées et des améliorations qui lui échapperaient s'il était occupé avec plusieurs projets en même temps.", "P.T. Barnum"],
["Se dédier à faire tout ce que l'on peut pour aider les autres à obtenir ce qu'ils veulent, c'est la clé du succès.", "Brian Sher"],
["L'intelligence est la capacité de s'adapter au changement.", "Stephen Hawking"],
["Le seul véritable voyage, c'est de changer de regard.", "Marcel Proust"],
["La vie n'est pas d'attendre que les orages passent, c'est d'apprendre à danser sous la pluie.", "Sénèque"],
["Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès.", "Albert Schweitzer"],
["Ce qui ne te tue pas te rend plus fort.", "Friedrich Nietzsche"],
["La seule vraie sagesse est de savoir que vous ne savez rien.", "Socrate"],
["Le talent travaille, le génie crée.", "Beethoven"],
["La persévérance, c'est ce qui rend l'impossible possible, le possible probable et le probable réalisé.", "Ibrahim El-Arar"],
["La créativité, c'est l'intelligence qui s'amuse.", "Albert Einstein"],
["Votre temps est limité, ne le gaspillez pas en vivant la vie de quelqu'un d'autre.", "Steve Jobs"],
["Le courage, ce n'est pas l'absence de peur, mais la capacité de la surmonter.", "Nelson Mandela"],
["L'éducation est l'arme la plus puissante pour changer le monde.", "Nelson Mandela"],
["La patience est la vertu des plus forts.", "Épicure"],
["Le pessimiste se plaint du vent, l'optimiste attend que ça passe, le leader ajuste les voiles.", "John Maxwell"],
["Pour réussir, votre désir de succès doit être supérieur à votre peur de l'échec.", "Bill Cosby"],
["La vie est ce qui arrive quand vous êtes occupé à faire d'autres projets.", "John Lennon"],
["L'avenir appartient à ceux qui croient en la beauté de leurs rêves.", "Eleanor Roosevelt"],
["Si vous pouvez le rêver, vous pouvez le faire.", "Walt Disney"],
["Les grands succès ne viennent pas dans les zones de confort.", "Robin Sharma"],
["Le secret de la réussite est la constance dans l'objectif.", "Benjamin Disraeli"],
["La connaissance parle, mais la sagesse écoute.", "Jimi Hendrix"],
["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
["Pour vivre heureux, vivons cachés.", "Nicolas Chamfort"],
["L'important n'est pas de gagner, mais de participer.", "Pierre de Coubertin"],
["Le travail est plus important que le talent.", "Alan Sugar"],
["La vie est un défi à relever, un bonheur à produire, une aventure à tenter.", "Mère Teresa"],
["La grandeur n'est pas où l'on se trouve, mais dans la direction vers laquelle on marche.", "Oscar Wilde"],
["Là où il y a une volonté, il y a un chemin.", "Proverbe anglais"],
["La différence entre l'ordinaire et l'extraordinaire, c'est ce petit quelque chose supplémentaire.", "Jimmy Johnson"],
["Qui n'avance pas, recule.", "Proverbe populaire"],
["Les rêves sont des projets que l'on laisse dormir trop longtemps.", "Jean-Claude Van Damme"],
["Le plus grand danger est de ne pas prendre de risques.", "Mark Zuckerberg"],
["Le bonheur n'est pas quelque chose de prêt, il vient de vos propres actions.", "Dalaï Lama"],
["La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.", "Franklin D. Roosevelt"],
["La clé du succès est d'avoir un bon jugement. Le bon jugement s'acquiert par l'expérience. L'expérience s'acquiert par le mauvais jugement.", "Tony Robbins"],
["La perfection n'est pas atteinte quand il n'y a plus rien à ajouter, mais quand il n'y a plus rien à retirer.", "Antoine de Saint-Exupéry"]

];


let citation = document.querySelector("#citation");
citation.textContent = generateQuote();             //écrit dans le html


console.log(data[1][0]);
console.log(data[1][1]);

function generateQuote(){                       //génère une citation aléatoire
    random = String(Math.floor(Math.random() * data.length));
    citationRandom = data[random]
    return citationRandom
}

generateQuote();




let generer = document.querySelector("#generer");

generer.addEventListener('click',function(){        //permet de génèrer une citation aléatoire en cliquant sur le bouton
    citation.textContent=generateQuote()
    console.log(generateQuote());
});

