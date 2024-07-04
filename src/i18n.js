import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "What is your preferred language?": "What is your preferred language?",
      "What gender do you identify with?": "What gender do you identify with?",
      "What is your age?": "What is your age?",
      "What do you hate the most in a book?":
        "What do you hate the most in a book?",
      "What are your favorite topics?": "What are your favorite topics?",
      "Answer 1": "Answer 1",
      "Answer 2": "Answer 2",
      "Answer 3": "Answer 3",
      "Enter your email": "Enter your email",
      "Invalid email address": "Invalid email address",
      Next: "Next",
      "Thank you for completing the quiz!":
        "Thank you for completing the quiz!",
      "We appreciate your time and effort.":
        "We appreciate your time and effort.",
      "Retake quiz": "Retake quiz",
      "Download my answers": "Download my answers",
      "18-29 years": "18-29 years",
      "30-39 years": "30-39 years",
      "40-49 years": "40-49 years",
      "Lack of logic": "Lack of logic",
      "A slow speed": "A slow speed",
      "Lack of humor": "Lack of humor",
      "Way too generic ending": "Way too generic ending",
      Werewolf: "Werewolf",
      Action: "Action",
      "Royal Obsession": "Royal Obsession",
      Romance: "Romance",
      "Young Adult": "Young Adult",
      "Bad Boy": "Bad Boy",
    },
  },
  de: {
    translation: {
      "What is your preferred language?": "Was ist Ihre bevorzugte Sprache?",
      "What gender do you identify with?":
        "Mit welchem Geschlecht identifizieren Sie sich?",
      "What is your age?": "Wie alt sind Sie?",
      "What do you hate the most in a book?":
        "Was stört Sie am meisten an einem Buch?",
      "What are your favorite topics?": "Was sind Ihre Lieblingsthemen?",
      "Answer 1": "Antwort 1",
      "Answer 2": "Antwort 2",
      "Answer 3": "Antwort 3",
      "Enter your email": "Geben Sie Ihre E-Mail-Adresse ein",
      "Invalid email address": "Ungültige E-Mail-Adresse",
      Next: "Weiter",
      "Thank you for completing the quiz!":
        "Vielen Dank, dass Sie den Test abgeschlossen haben!",
      "We appreciate your time and effort.": "Wir schätzen Ihre Zeit und Mühe.",
      "Retake quiz": "Test erneut machen",
      "Download my answers": "Meine Antworten herunterladen",
      "18-29 years": "18-29 Jahre",
      "30-39 years": "30-39 Jahre",
      "40-49 years": "40-49 Jahre",
      "Lack of logic": "Mangel an Logik",
      "A slow speed": "Langsame Geschwindigkeit",
      "Lack of humor": "Mangel an Humor",
      "Way too generic ending": "Allzu generisches Ende",
      Werewolf: "Werwolf",
      Action: "Action",
      "Royal Obsession": "Königliche Obsession",
      Romance: "Romantik",
      "Young Adult": "Junge Erwachsene",
      "Bad Boy": "Bad Boy",
    },
  },
  fr: {
    translation: {
      "What is your preferred language?": "Quelle est votre langue préférée ?",
      "What gender do you identify with?":
        "Avec quel genre vous identifiez-vous ?",
      "What is your age?": "Quel est votre âge ?",
      "What do you hate the most in a book?":
        "Qu'est-ce que vous détestez le plus dans un livre ?",
      "What are your favorite topics?": "Quels sont vos sujets préférés ?",
      "Enter your email": "Entrez votre email",
      "Invalid email address": "Adresse email invalide",
      Next: "Suivant",
      "Thank you for completing the quiz!": "Merci d'avoir terminé le quiz !",
      "We appreciate your time and effort.":
        "Nous apprécions votre temps et vos efforts.",
      "Retake quiz": "Refaire le quiz",
      "Download my answers": "Télécharger mes réponses",
      "18-29 years": "18-29 ans",
      "30-39 years": "30-39 ans",
      "40-49 years": "40-49 ans",
      "Lack of logic": "Manque de logique",
      "A slow speed": "Vitesse lente",
      "Lack of humor": "Manque d'humour",
      "Way too generic ending": "Fin beaucoup trop générique",
      Werewolf: "Loup-garou",
      Action: "Action",
      "Royal Obsession": "Obsession royale",
      Romance: "Romance",
      "Young Adult": "Jeune adulte",
      "Bad Boy": "Mauvais garçon",
    },
  },
  es: {
    translation: {
      "What is your preferred language?": "¿Cuál es tu idioma preferido?",
      "What gender do you identify with?": "¿Con qué género te identificas?",
      "What is your age?": "¿Cuál es tu edad?",
      "What do you hate the most in a book?":
        "¿Qué es lo que más odias de un libro?",
      "What are your favorite topics?": "¿Cuáles son tus temas favoritos?",
      "Answer 1": "Respuesta 1",
      "Answer 2": "Respuesta 2",
      "Answer 3": "Respuesta 3",
      "Enter your email": "Ingresa tu correo electrónico",
      "Invalid email address": "Correo electrónico no válido",
      Next: "Siguiente",
      "Thank you for completing the quiz!":
        "¡Gracias por completar el cuestionario!",
      "We appreciate your time and effort.": "Apreciamos tu tiempo y esfuerzo.",
      "Retake quiz": "Volver a hacer el quiz",
      "Download my answers": "Descargar mis respuestas",
      "18-29 years": "18-29 años",
      "30-39 years": "30-39 años",
      "40-49 years": "40-49 años",
      "Lack of logic": "Falta de lógica",
      "A slow speed": "Velocidad lenta",
      "Lack of humor": "Falta de humor",
      "Way too generic ending": "Final demasiado genérico",
      Werewolf: "Hombre lobo",
      Action: "Acción",
      "Royal Obsession": "Obsesión real",
      Romance: "Romance",
      "Young Adult": "Joven adulto",
      "Bad Boy": "Chico malo",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
