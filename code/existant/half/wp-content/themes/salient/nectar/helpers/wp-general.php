<?php
/**
 * General setup functions
 *
 * @package Salient WordPress Theme
 * @subpackage helpers
 * @version 10.5
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


/**
 * Add theme support.
 *
 * @since 2.0
 */
function nectar_add_theme_support() {
	
	add_theme_support( 'post-formats', array( 'quote', 'video', 'audio', 'gallery', 'link' ) );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'automatic-feed-links' );
	
	// Add custom editor style.
	add_editor_style( 'css/style-editor.css' );
	
}

add_action( 'after_setup_theme', 'nectar_add_theme_support' );


// Default WP video size.
global $content_width;
$content_width = 1080;


/**
 * Site title.
 *
 * @since 7.0
 */
if ( ! function_exists( '_wp_render_title_tag' ) ) {
	function nectar_theme_slug_render_title() { ?>
			<title><?php wp_title( '|', true, 'right' ); ?></title> 
			<?php
	}
		add_action( 'wp_head', 'nectar_theme_slug_render_title' );
}




/**
 * Verify the existance of shortcodes/attributes on pages/posts in order to load needed assets.
 * @param array $search_arr 	the array of items to look for
 * @return Boolean
 * @since 10.1
 */
function nectar_using_content($search_arr) {
	
	global $post;
	
	if ( ! is_object( $post ) ) {
		$post = (object) array(
			'post_content' => ' ',
			'ID'           => ' ',
		);
	}
	
	$portfolio_extra_content = ( isset( $post->ID ) ) ? get_post_meta( $post->ID, '_nectar_portfolio_extra_content', true ) : '';
	$post_content            = ( isset( $post->post_content ) ) ? $post->post_content : '';
	
	foreach($search_arr as $string){
		
		if( strpos( $post_content, $string ) !== false || strpos( $portfolio_extra_content, $string ) !== false) {
			return true;
		} 
		
	}

	return false;
	
}



/**
 * Add iFrame to allowed wp_kses_post tags
 *
 * @param string $tags Allowed tags, attributes, and/or entities.
 * @param string $context Context to judge allowed tags by. Allowed values are 'post',
 *
 * @return mixed
 */
function nectar_custom_wpkses_post_tags( $tags, $context ) {
	if ( 'post' === $context ) {
		$tags['iframe'] = array(
			'src'             => true,
			'height'          => true,
			'width'           => true,
			'frameborder'     => true,
			'allowfullscreen' => true,
		);
	}
	return $tags;
}
add_filter( 'wp_kses_allowed_html', 'nectar_custom_wpkses_post_tags', 10, 2 );




/**
 * Remove the lazy load class use in Jetpack.
 * only called for specific elements which need the image
 * present to calculate correctly - masonry, isotope etc.
 *
 * @since 8.0
 */
if ( ! function_exists( 'nectar_remove_lazy_load_functionality' ) ) {
	function nectar_remove_lazy_load_functionality( $attr ) {
		$attr['class'] .= ' skip-lazy';
		return $attr;
	}
}



/**
 * Check for HTTPS
 *
 * @since 4.0
 */
$nectar_is_ssl = is_ssl();

if ( ! function_exists( 'nectar_ssl_check' ) ) {
	function nectar_ssl_check( $src ) {

		global $nectar_is_ssl;

		if ( strpos( $src, 'http://' ) !== false && $nectar_is_ssl == true ) {
			$converted_start = str_replace( 'http://', 'https://', $src );
			return $converted_start;
		} else {
			return $src;
		}
	}
}



/**
* Helper to strip paragraph tags.
*
* @param string $content text to remove p tags from.
* @since 10.5
*/
function nectar_remove_p_tags( $content ) { 
	
	$content = preg_replace('/<p[^>]*>[\s|&nbsp;]*<\/p>/', '', $content);	
	return $content;
}


