Feature: Consulter les informations du site en tant que visiteur

    Scenario: Scroller le site pour consulter les informations
        Given je suis sur la page d'accueil
        When je fais défiler le site
        Then je peux consulter les informations

    Scenario: Consultation du feed Instagram sur le site
        Given je suis sur la page d'accueil
        When je défile jusqu'a la section Instagram
        Then je peux voir le feed Instagram "https://www.instagram.com/halfdulauragais/embed/"

    Scenario: Consultation des courses
        Given je suis sur la page des courses
        When je clique sur une course
        Then je peux voir les informations de la course

    Scenario: Redirection vers les informations de la page
        Given je suis sur n'importe quelle page
        When je clique sur les menus
        Then je suis redirigé vers les informations de la page
