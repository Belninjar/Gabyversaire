document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("modal");
    const caveImg = document.getElementById("cave-image");
    const giftImg = document.getElementById("gift-image");
    const close = document.getElementById("close");
    const quizContainer = document.getElementById("quiz-container");
    const questionText = document.getElementById("question-text");
    const answerInput = document.getElementById("answer-input");
    const submitAnswer = document.getElementById("submit-answer");

    const questions = [
        { number: 1, question: "Qui est l'homme le plus beau, drole et cool du monde ?", answer: "Guillaume" },
        { number: 2, question: "Qui sont les trois M ?", answer: "Montaigne, Montesqieu, Mauriac" },
        { number: 3, question: "Quelle boule de poile est plus mignonne du monde ?", answer: "Kira" },
        { number: 4, question: "Où tout à commencé ?", answer: "Cap d'Agde" },
        { number: 5, question: "Depuis combien d'année es-tu la femme la plus heureuse ?", answer: "17 ans" },
        { number: 6, question: "Dans combien de lieux nous avons vécu ensemble ?", answer: "5" },
        { number: 7, question: "Quelle était la première voiture de Guillaume ?", answer: "Ford Fiesta" }, 
        { number: 8, question: "De chair ou de sang ?", answer: "Sang" }, 
        { number: 9, question: "Quelle est la plus belle force au monde ?", answer: "Diélectrophorèse" }, 
        { number: 10, question: "Quelle taille fait Guillaume ? ", answer: "167 cm" },
        { number: 11, question: "Quelle est l'unique fleur que connaisse Gui ?", answer: "Le crocus" }, 
        { number: 12, question: "Quel est le plus ancien copain de Gui ?", answer: "Quentin" }, 
        { number: 13, question: "Où à t'on commencé le compost ?", answer: "Achille Viadieu" }, 
        { number: 14, question: "Quel était le code du portail d'Achille Viadieu ?", answer: "1247" }, 
        { number: 15, question: "Quelle est la couleur préférée de Gui ?", answer: "Bleu" }, 
        { number: 16, question: "Quel a été le premier animal de compagnie de Gui ?", answer: "Poisson" }, 
        { number: 17, question: "Est-ce que tu aimes Gui ?", answer: "Oui" }, 
        { number: 18, question: "En randonnée quand on a bien grimpé on est plein d'… ?", answer: "Energie potentielle" }, 
        { number: 19, question: "Qu'est ce que Gui a envie de faire là tout de suite ?", answer: "bisous" }, 
        { number: 20, question: "Qu'est-ce qui peut être dans la mer et dans le ciel ?", answer: "étoile" }, 
        { number: 21, question: "Qu'est-ce qui doit être cassé pour être utilisé ?", answer: "oeuf" }, 
        { number: 22, question: "Je ne peux pas marcher, j'ai pourtant un dos et quatre pieds. Qui suis-je ?", answer: "chaise" }, 
        { number: 23, question: "Quand je suis frais je suis chaud. Qui suis-je ?", answer: "pain" }, 
        { number: 24, question: "Quel est le plat préféré de Guillaume ?", answer: "Cassoulet" }, 
        { number: 25, question: "Quel est le parfum de glace préféré de Gui ?", answer: "Chocolat" }, 
        { number: 26, question: "Qu'est-ce que Gui déteste le plus au monde ?", answer: "Concombre" }, 
        { number: 27, question: "Quelle est notre activité favorite ?", answer: "Karaoké" }, 
        { number: 28, question: "En route ?", answer: "Mauvaise troupe" }, 
        { number: 29, question: "Qu'est-ce qui est toujours en voyage, mais ne quitte jamais son coin ?", answer: "Timbre" }, 
        { number: 30, question: "Tu veux un cadeau ?", answer: "Oui" }, 
        { number: 31, question: "Chanson préférée de Gui ?", answer: "La reine des neiges" }, 
        { number: 32, question: "Dans quel bâtiment travaille Gui ?", answer: "B612" }, 
        { number: 33, question: "La coupe préférée de Gui ?", answer: "Mulet" }, 
        { number: 34, question: "Où est-ce que Gui a envie de t'embrasser là maintenant ?", answer: "Les fesses" }, 
        { number: 35, question: "Qu'est-ce que l'on va faire ce soir ?", answer: "L'amour" }, 

    ];

    let currentQuestion = null;

    document.querySelectorAll('.object').forEach(item => {
        item.addEventListener('click', function() {
            const number = parseInt(this.getAttribute('data-number'));
            currentQuestion = questions.find(q => q.number === number);

            if (currentQuestion) {
                caveImg.style.display = "block";
                giftImg.style.display = "none";
                questionText.textContent = currentQuestion.question;
                answerInput.value = "";
                modal.style.display = "block";
            }
        });
    });

    submitAnswer.addEventListener('click', function() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = currentQuestion.answer.trim().toLowerCase();

        if (userAnswer === correctAnswer) {
            caveImg.style.display = "none";
            giftImg.src = `gift${currentQuestion.number}.png`;
            giftImg.style.display = "block";
        } else {
            alert("Réponse incorrecte. Essayez encore !");
        }
    });

    close.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
