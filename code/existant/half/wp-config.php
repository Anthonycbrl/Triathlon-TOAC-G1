<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clefs secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur 
 * {@link http://codex.wordpress.org/Editing_wp-config.php Modifier
 * wp-config.php} (en anglais). C'est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d'installation. Vous n'avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */
define('WP_MEMORY_LIMIT','42M');
// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('WP_CACHE', true); //Added by WP-Cache Manager
define('DB_NAME', 'dumi7998_half');
/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'dumi7998_admin');
/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'V04+u*]tf].5');
/** Adresse de l'hébergement MySQL. */
define('DB_HOST', 'localhost');
/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8');
/** Type de collation de la base de données. 
  * N'y touchez que si vous savez ce que vous faites. 
  */
define('DB_COLLATE', '');
/**#@+
 * Clefs uniques d'authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant 
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n'importe quel moment, afin d'invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'O~&@/@fMvLJdhOg_>RduUpCk1+Yf45}^(^GX_117+tW.dIs2tDRu+-JK L=D~8zl'); 
define('SECURE_AUTH_KEY',  ';*s; OI9+E>R8es--upyV^Lk&UG5jl-3wBD >YOe-HhO(8|_fKq_sWM]s%;Z4:nC'); 
define('LOGGED_IN_KEY',    'c:S4qgM-e7hY;#$!dG|]S;w*-]u[dQ5}hc-RBCgjh,h^rd{|gM4Iu,BAbyw;@+|P'); 
define('NONCE_KEY',        'c<[c~h|MW&<lp& /s8(#|rSZBLmzsq1x!.u:s;O,F#6$J*P/?$F$G>.TL}vwivgP'); 
define('AUTH_SALT',        'h8/*6*0hL>HIEMPMh}?Sna+&z$F,^.r^#e)E!A~k2Zu::17Jk,?Tv9c|CY#}kX%!'); 
define('SECURE_AUTH_SALT', 'igisa_UDHwt#J152=h43enzY!J+[07^2/WYr-A-9_$pXHKw%X`Z?g0bAd,=:{<`~'); 
define('LOGGED_IN_SALT',   '<nO(,oWrEm5nxMd9|Xn!=yY|*+WG+iW;,T@N27alFR:a-f CW}I-N^Y}5SV*/Y6%'); 
define('NONCE_SALT',       '+*E=J|[{X[R5iZJ&3}/Ea5Pl,eDD)mK#wavp2.p+*|q~<ms0^/t.JPb{8=&Se=qH'); 
/**#@-*/
/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique. 
 * N'utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés!
 */
$table_prefix  = 'wp_';
/**
 * Langue de localisation de WordPress, par défaut en Anglais.
 *
 * Modifiez cette valeur pour localiser WordPress. Un fichier MO correspondant
 * au langage choisi doit être installé dans le dossier wp-content/languages.
 * Par exemple, pour mettre en place une traduction française, mettez le fichier
 * fr_FR.mo dans wp-content/languages, et réglez l'option ci-dessous à "fr_FR".
 */
define ('WPLANG', 'fr_FR');
/** 
 * Pour les développeurs : le mode deboguage de WordPress.
 * 
 * En passant la valeur suivante à "true", vous activez l'affichage des
 * notifications d'erreurs pendant votre essais.
 * Il est fortemment recommandé que les développeurs d'extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de 
 * développement.
 */ 
define('WP_DEBUG', false); 
/* C'est tout, ne touchez pas à ce qui suit ! Bon blogging ! */
/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');