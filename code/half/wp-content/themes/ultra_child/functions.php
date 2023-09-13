<?php

/**
** activation theme
**/

function theme_enqueue_styles() {
          wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

if ( ! function_exists( 'ultra_top_bar_text_area' ) ):

/**
** Display the top bar text.
**/

function ultra_top_bar_text_area() {
	$phone = wp_kses_post( siteorigin_setting( 'text_phone' ) );
	$email = wp_kses_post( siteorigin_setting( 'text_email' ) );
	
	if ( siteorigin_setting( 'text_phone' ) ) {
		echo '<span class="phone"><a href="tel:' . $phone . '">' . $phone . '</a></span>';
	}
	if ( siteorigin_setting( 'text_email' ) ) {
		echo '<span class="email"><a href="mailto:' . $email . '">Contactez l\'organisateur</a></span>';
	}	
}
add_action( 'ultra_top_bar_text_MOD', 'ultra_top_bar_text_area' );
endif;

/**
** Add Widget Area.
**/

function ultra_child_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sponsors', 'ultra' ),
		'id'            => 'sponsors',
		'description'   => esc_html__( 'Race sponsors are display in this area.', 'ultra' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
}
add_action( 'widgets_init', 'ultra_child_widgets_init' );