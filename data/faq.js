// C'est ici que tu modifies tes questions/réponses
const helpData = [
  {
    id: "account",
    title: "Mon Compte",
    icon: "⚡",
    color: "bg-pastel-blue",
    accent: "text-blue-500",
    desc: "Problèmes de connexion & inscription",
    articles: [
      { q: "Je ne reçois pas le mail de validation", a: "Regarde dans tes spams ou courriers indésirables. Si tu utilises une adresse de lycée, essaie avec une adresse perso." },
      { q: "Impossible de créer un compte", a: "Vérifie que tu as rempli tous les champs. Si ton email est déjà utilisé, essaie 'Mot de passe oublié'." },
      { q: "Comment supprimer mes données ?", a: "Profil > Paramètres > Sécurité > Supprimer mon compte." }
    ]
  },
  {
    id: "mentors",
    title: "Espace Mentors",
    icon: "🎓",
    color: "bg-pastel-purple",
    accent: "text-purple-500",
    desc: "Certifications et rôle des étudiants",
    articles: [
      { q: "Comment devenir Mentor ?", a: "Inscris-toi et fournis un certificat de scolarité pour valider ton profil." },
      { q: "Est-ce rémunéré ?", a: "Non, c'est du bénévolat, mais c'est top pour ton CV !" },
      { q: "Je peux refuser une demande ?", a: "Oui, tu gères tes disponibilités comme tu veux." }
    ]
  },
  {
    id: "app",
    title: "L'Application",
    icon: "📱",
    color: "bg-pastel-orange",
    accent: "text-orange-500",
    desc: "Fonctionnalités et compatibilité",
    articles: [
      { q: "C'est dispo sur Android ?", a: "Oui, iOS et Android." },
      { q: "Quand sort l'application ?", a: "Très bientôt ! Suis-nous sur les réseaux." },
      { q: "C'est quoi les 'matchs' ?", a: "L'algo te propose les mentors idéaux pour toi." }
    ]
  },
  {
    id: "safety",
    title: "Sécurité & Parents",
    icon: "🛡️",
    color: "bg-pastel-red",
    accent: "text-red-500",
    desc: "Confidentialité et modération",
    articles: [
      { q: "Est-ce sécurisé ?", a: "Oui, profils vérifiés et modération active." },
      { q: "Comment signaler ?", a: "Via les 3 points dans le chat > Signaler." },
      { q: "Données revendues ?", a: "Jamais." }
    ]
  },
  {
    id: "bug",
    title: "Problèmes Techniques",
    icon: "🐛",
    color: "bg-pastel-yellow",
    accent: "text-yellow-600",
    desc: "Bugs et pannes",
    articles: [
      { q: "L'application plante", a: "Mets à jour l'app. Si ça persiste, contacte-nous." },
      { q: "Message non envoyé", a: "Vérifie ta connexion internet." }
    ]
  }
];