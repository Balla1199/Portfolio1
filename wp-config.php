<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'portfolio1' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

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
define( 'AUTH_KEY',         '?S ?l.;EPaWvyGK#l_8TKrm[8P%._{c=S+;s1uMNA{DHDcs+^L1>Tr7OebY[m2Wt' );
define( 'SECURE_AUTH_KEY',  'b[*6!r4WAyV_)y}ST`.2C=nCr+*3Epn<|*z{[*N#.qTaO9Bgs,)HmDICd{7p@v3:' );
define( 'LOGGED_IN_KEY',    '+|+3=g`whs`-$LN|#FuT_@ZU6Q,N(jodb+Y,:HUby;un((r|~_sR@w#|Nm!#<YOd' );
define( 'NONCE_KEY',        'BCw=i|3:^h?-S<P?_T:.,L.r+0]N$+pl9R=x<PP<4)_4x?pV%KP-JvSqy;</|HY{' );
define( 'AUTH_SALT',        'T-<jFm**}CmQ#Grwk)6=f~Du}M=xVj?;H!T%|b <>L!#IR^pJ6ue]F-#eYp*m-XF' );
define( 'SECURE_AUTH_SALT', '}tZ!HSQ^,7MQ(T$2f14-K/M&6|rp*F3KaP<bIK)h=5Pw%u1+$JohR;K:yM::@ZVc' );
define( 'LOGGED_IN_SALT',   'W?F/X}H96a%-a14m:vl^cwGnG]^s08NX`SBo:ri_P%R;<YJz(YlMov#gWLXt9|=l' );
define( 'NONCE_SALT',       'atSA~.{H1eSW~2kt[Bf`K5>.}6ft-uIj4!abjuMG;O%GKX=nRIOZ*cHbETW_ E`B' );
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
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
