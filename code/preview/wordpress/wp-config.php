<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wordpress' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '`3tXvvt<~Av8fMWuY}.}*l9@cJ8-tD1_+jWJhd:6tv?EmfZdq4sHfZx(.:,Ck}yP' );
define( 'SECURE_AUTH_KEY',  'lT8fup%mVqny/}_d<dydc$.)c~^6!RwHw_w#XtJM_1;nj,2l%B+<^&VT?%_y1!>r' );
define( 'LOGGED_IN_KEY',    'X^aNxsAyKo8^g}GE,Nqp)]s`7g%cs:H,y:mq7L24E`:rLd*;9vGAE/ZH3^lHx>?M' );
define( 'NONCE_KEY',        'kh#6.0-)?f=]UC5cY|JpN,Rl&r;tRzYcU^o6_9Hg-Jc5y}wLHx!p=r5%X,ABG)(F' );
define( 'AUTH_SALT',        '8njZAz/ZM];#HRl-TsaUcjLAz,Z{&30+mswqP7 ;_[b@vA&dlf.G}H29-V5<.e0z' );
define( 'SECURE_AUTH_SALT', 'fv5t[vcb(W`yAb&a6]@$y2PM%{{,4&6^VKP#xV@;:Y2i!!$13!(Vsw6tvN5RZSi{' );
define( 'LOGGED_IN_SALT',   'uivIyb:EtEVJe{B{:-73Y{^2,cvoT5jvQbO`WDw{}M9<$>M!e/FG+Yv5{Ka#^I&*' );
define( 'NONCE_SALT',       'eGb.>B3p}!qQj5;PGt;i,#W)E4htaa~-$~;xTxt!$?1:V1Uk8uBQ]KJpZ 25hEdK' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
