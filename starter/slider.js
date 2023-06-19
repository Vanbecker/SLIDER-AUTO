
// Cela définit un tableau appelé slide qui contient les chemins d'accès des images à afficher dans le diaporama.
const slide = ["images/paysage-toulousain-3.jpg", "images/paysage-toulousain-1.jpg", "images/paysage-toulousain-2.jpg"];

// Cela initialise une variable numero qui représente l'index de l'image actuellement affichée dans le diaporama. Au départ, il est défini sur 0 pour afficher la première image.
let numero = 0;

// La fonction ChangeSlide(sens) est définie avec un paramètre sens :
function ChangeSlide(sens) {

    // Cette ligne met à jour la valeur de numero en ajoutant la valeur de sens. Cela permet de passer à l'image précédente ou suivante en fonction du paramètre sens (-1 pour précédent, 1 pour suivant).
    numero = numero + sens;

    // Cette condition vérifie si numero est inférieur à 0, ce qui signifie que nous avons atteint la première image du tableau. Dans ce cas, numero est réglé sur l'index de la dernière image du tableau.   
    if (numero < 0)

        // Cette condition vérifie si numero dépasse l'index de la dernière image du tableau. Dans ce cas, numero est réglé sur 0 pour revenir à la première image.
        numero = slide.length - 1;

    // Cette condition vérifie si numero dépasse l'index de la dernière image du tableau. Dans ce cas, numero est réglé sur 0 pour revenir à la première image.
    if (numero > slide.length - 1)
        numero = 0;

    // Cette ligne met à jour la source de l'élément HTML avec l'ID "slide" pour afficher l'image correspondante à l'index numero dans le tableau slide.
    document.getElementById("slide").src = slide[numero];
}

// Cette ligne utilise la fonction setInterval pour appeler la fonction ChangeSlide avec le paramètre 1 toutes les 4 secondes (4000 millisecondes). Cela permet d'automatiser le diaporama en faisant défiler les images à intervalles réguliers.
setInterval("ChangeSlide(1)", 4000);


// En résumé, ce code définit un tableau d'images, une variable pour suivre l'index de l'image actuellement affichée, une fonction pour changer l'image en fonction du sens (précédent ou suivant), et un appel setInterval pour faire défiler automatiquement les images du diaporama.