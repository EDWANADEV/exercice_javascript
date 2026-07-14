# exercice_javascript
# Manipulation du DOM
Dans le but de maîtriser la manipulation du DOM, nous avons là des mini-projets effectués par niveau de dificulté.

Avant de les présentés, nous répondrons d'abord à certaines questions histoire de s'introduire dans le langage.
## C'est quoi un scope en JavaScript?
Un scope (souvent prononcé « scoop » en français, de l'anglais scope) correspond à la portée d'une variable. Il définit les zones du code où une variable est accessible et mémorisée. Il existe trois principaux types de scope en JavaScript :
1. Le Scope Global
C'est le contexte par défaut. Une variable déclarée en dehors de toute fonction est globale et peut être appelée depuis n'importe où dans votre script.
2. Le Scope Local (ou de fonction)
Une variable déclarée à l'intérieur d'une fonction ne peut être utilisée qu'à l'intérieur de cette même fonction.
3. Le Scope de Bloc (introduit avec ES6)
Apparaît lorsque vous déclarez des variables avec let ou const à l'intérieur d'accolades { } (comme dans une condition if ou une boucle for). Elles n'existent qu'à l'intérieur de ces accolades.
Note : Les variables déclarées avec var ne respectent pas le scope de bloc, ce qui peut causer des bugs.
## Quelles sont les différents types de fonction exitant en JavaScript et leur particularité
En JavaScript, il existe principalement quatre façons différentes de déclarer une fonction. Le choix dépend souvent du besoin d'utiliser le mot-clé this, de la lisibilité ou du besoin d'exécuter le code immédiatement.Voici les différents types et leurs particularités :
1. La Fonction Déclarée (Function Declaration)
C'est la méthode classique. Elle utilise le mot-clé function suivi d'un nom.
- Particularité unique : Le Hoisting (Hissage). JavaScript déplace virtuellement cette fonction au sommet du code avant l'exécution. Vous pouvez donc l'appeler avant sa ligne de déclaration.
- this : Son contexte this dépend de la façon dont elle est appelée.
2. L'Expression de Fonction (Function Expression)
La fonction est créée puis stockée directement dans une variable. Elle peut être anonyme (sans nom).
- Particularité : Elle n'est pas soumise au hoisting. Vous ne pouvez pas l'utiliser avant de l'avoir définie.
- this : Identique à la fonction déclarée.
3. La Fonction Fléchée (Arrow Function) - ES6
Introduite pour raccourcir la syntaxe, elle utilise la flèche =>.
- Particularité 1 : Pas de this propre. Elle hérite du this de son environnement extérieur (lexical). C'est idéal pour les écouteurs d'événements ou les fonctions de rappel (callbacks).
- Particularité 2 : Syntaxe ultra-courte. Si la fonction n'a qu'une seule instruction, le mot-clé return et les accolades {} sont facultatifs.
- Particularité 3 : Elle ne possède pas l'objet arguments et ne peut pas être utilisée comme constructeur (avec new).
4. La Fonction Anonyme Immédiate (IIFE)
C'est une fonction qui est définie et exécutée immédiatement après sa création.
- Particularité : Elle crée un scope temporaire isolé. Toutes les variables à l'intérieur sont protégées et ne polluent pas le scope global. Elle est très utile pour initialiser du code en toute sécurité.
