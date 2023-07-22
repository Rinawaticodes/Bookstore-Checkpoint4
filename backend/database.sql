CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE user (
   id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
   username VARCHAR(80) NOT NULL UNIQUE,
   password VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO USER (username, password) VALUES ('conan', 'admin1');

CREATE TABLE book (
   id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
   title varchar(255) NOT NULL,
   author varchar(255) NOT NULL,
   description TEXT NOT NULL,
   picture VARCHAR(255) NULL,
   price float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO book (title, author, description, picture, price) VALUES 
  ("Le Coeur de fer - Tome 02", "Nina Varela", "Entre une mortelle et une automa se trouvent le cœur et la lame.Pendant trop longtemps, les Automae ont dominé le royaume de Rabu, asservissant les humains qui le peuplent. Mais la révolution est en marche et sa clé de voûte n'est autre qu'Ayla.", "/assets/images/book14.jpeg", 23.90),
  ("Harry Potter et le Prisonnier d’Azkaban","J.K. Rowling","Sirius Black, le dangereux criminel qui s'est échappé de la forteresse d'Azkaban, recherche Harry Potter. C'est donc sous bonne garde que l'apprenti sorcier fait sa troisième rentrée. Au programme : des cours de divination, la fabrication d'une potion de Ratatinage, le dressage des hippogriffes... Mais Harry est-il vraiment à l'abri du danger qui le menace ?","/assets/images/HP3.jpeg",10.00),
  ("Harry Potter et la Coupe de feu","J.K. Rowling", "Harry Potter a quatorze ans et entre en quatrième année à Poudlard. Une grande nouvelle attend Harry, Ron et Hermione à leur arrivée : la tenue d'un tournoi de magie exceptionnel entre les plus célèbres écoles de sorcellerie. Déjà les délégations étrangères font leur entrée. Harry se réjouit... Trop vite. Il va se trouver plongé au cœur des événements les plus dramatiques qu'il ait jamais eu à affronter.","/assets/images/HP4.jpeg",10.99),
  ("Harry Potter et les Reliques de la Mort","J.K. Rowling","Cette année, Harry a dix-sept ans et ne retourne pas à Poudlard. Avec Ron et Hermione, il se consacre à la dernière mission confiée par Dumbledore. Mais le Seigneur des Ténèbres règne en maître. Traqués, les trois fidèles amis sont contraints à la clandestinité. D'épreuves en révélations, le courage, les choix et les sacrifices de Harry seront déterminants dans la lutte contre les forces du Mal.", "/assets/images/HP7.webp",12.99),
  ("Ecriture : Mémoires d'un métier","Stephen King","Durant sa convalescence, le romancier découvre les liens toujours plus forts entre l’écriture et la vie. Résultat : ce livre hors norme et génial, tout à la fois essai sur la création littéraire et récit autobiographique. Mais plus encore révélation de cette alchimie qu’est l’inspiration.","/assets/images/ecriture.jpg",8.99),
  ("La Ligne verte","Stephen King","Paul Edgecombe, ancien gardien-chef d’un pénitencier dans les années 1930, entreprend d’écrire ses mémoires. Il revient sur l’affaire John Caffey – ce grand Noir au regard absent, condamné à mort pour le viol et le meurtre de deux fillettes – qui défraya la chronique en 1932.","/assets/images/La-ligne-verte.jpg",8.90),
  ("Misery","Stephen King","Misery, c'est le nom de l'héroïne populaire qui a rapporté des millions de dollars au romancier Paul Sheldon. Après quoi il en a eu assez : il a fait mourir Misery pour écrire enfin le « vrai » roman dont il rêvait.","/assets/images/misery.jpg",8.70),
  ("Après","Stephen King","Jamie n'est pas un enfant comme les autres : il a le pouvoir de parler avec les morts. Mais si ce don extraordinaire n'a pas de prix, il peut lui coûter cher. C'est ce que Jamie va découvrir lorsqu'une inspectrice de la police de New York lui demande son aide pour traquer un tueur qui menace de frapper… depuis sa tombe.","/assets/images/after.jpg",8.90),
  ("Who Moved My Cheese","Spencer Johnson","Comment d'adapter au changement au travail, en famille et en amour","/assets/images/book8.jpeg",8.99),
  ("Harry Potter et l’Ordre du phénix","J.K. Rowling","À quinze ans, Harry entre en cinquième année à Poudlard, mais il n'a jamais été si anxieux. L'adolescence, la perspective des examens et ces étranges cauchemars... Car Celui-Dont-On-Ne-Doit-Pas-Prononcer-Le-Nom est de retour. Le ministère de la Magie semble ne pas prendre cette menace au sérieux, contrairement à Dumbledore.","/assets/images/HP6.jpeg",12.99),
  ("Harry Potter et le Prince de sang-mêlé","J.K. Rowling","Dans un monde de plus en plus inquiétant, Harry se prépare à retrouver Ron et Hermione. Bientôt, ce sera la rentrée à Poudlard, avec les autres étudiants de sixième année. Mais pourquoi Dumbledore vient-il en personne chercher Harry chez les Dursley ? Dans quels extraordinaires voyages au cœur de la mémoire va-t-il l'entraîner ?","/assets/images/HP6.jpeg",12.99),
  ("To Pixar and Beyond", "Lawrence Levy","L'histoire inédite d'un initié qui raconte comment une société d'animation informatique en difficulté, Pixar, est devenue l'une des plus grandes organisations de divertissement de tous les temps.", "/assets/images/book11.jpeg", 7.69),
  ("Holes","Louis Sachar","Stanley Yelnats est victime d'une malédiction. Une malédiction qui a commencé avec son arrière-arrière-grand-père, un bon à rien, un sale, un pourri, un voleur de cochons, et qui a suivi des générations de Yelnats. Aujourd'hui, Stanley a été injustement envoyé dans un centre de détention pour garçons, le Camp Green Lake, où les garçons se forgent un caractère en passant toute la journée, tous les jours, à creuser des trous d'exactement un mètre cinquante de large et un mètre cinquante de profondeur. Il n'y a pas de lac à Camp Green Lake. Mais il y a énormément de trous.","/assets/images/book7.jpeg",7.29),
  ("Auggie & Me", "R.J. Palacio", "Aujourd'hui, dans AUGGIE & ME, vous pouvez découvrir une nouvelle facette de l'histoire de WONDER dans trois nouveaux chapitres écrits par trois personnages différents", "/assets/images/book5.jpeg","9.87"),
  ("Harry Potter à l'école des sorciers","J.K. Rowling","Le jour de ses onze ans, Harry Potter, un orphelin élevé par un oncle et une tante qui le détestent, voit son existence bouleversée. Un géant vient le chercher pour l'emmener à Poudlard, une école de sorcellerie ! Voler en balai, jeter des sorts, combattre les trolls : Harry se révèle un sorcier doué. Mais un mystère entoure sa naissance et l'effroyable V., le mage dont personne n'ose prononcer le nom.","/assets/images/HP1.jpeg",10.00),
  ("Harry Potter et la Chambre des secrets","J.K. Rowling", "Une rentrée fracassante en voiture volante, une étrange malédiction qui s'abat sur les élèves, cette deuxième année à l'école des sorciers ne s'annonce pas de tout repos ! Entre les cours de potions magiques, les matchs de Quidditch et les combats de mauvais sorts, Harry et ses amis Ron et Hermione trouveront-ils le temps de percer le mystère de la Chambre des Secrets ?", "/assets/images/HP2.jpeg", 12.00);

CREATE TABLE cart (
   id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE cart_book (
   id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
   cart_id int unsigned not null,
   CONSTRAINT fk_cart_id
   FOREIGN KEY (cart_id)
   REFERENCES cart(id),
   book_id int  unsigned not null,
   CONSTRAINT fk_add_book_id 
   FOREIGN KEY (book_id)
   REFERENCES book(id),
   transaction DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
   quantity int not null
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
