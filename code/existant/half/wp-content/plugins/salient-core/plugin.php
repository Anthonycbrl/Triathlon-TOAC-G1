<?php
/**
 * Plugin Name: Salient Core
 * Plugin URI: --
 * Description: Core functionality required by the Salient theme. Adds the Salient collection of WPBakery page builder elements, template library and page/post options.
 * Author: ThemeNectar
 * Author URI: http://themenectar.com
 * Version: 1.0
 * Text Domain: salient-core
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'SALIENT_CORE_ROOT_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'SALIENT_CORE_PLUGIN_PATH', plugins_url( 'salient-core' ) );
	
class Salient_Core {
	
	static $instance = false;
	
	public $plugin_version = '1.0';
		
	private function __construct() {
		
		// Front end assets.
		add_action('wp_enqueue_scripts', array( $this, 'salient_core_enqueue_assets' ),	10 );

		// Admin assets.
		add_action( 'admin_enqueue_scripts',  array( $this, 'salient_core_edit_scripts' ) );
		add_action( 'admin_print_styles', array( $this, 'salient_core_metabox_styles' ) );
		
		// Text domain.
		add_action( 'init', array( $this, 'salient_core_load_textdomain' ) );
		
		// Start it up.
		add_action( 'after_setup_theme', array( $this, 'init' ), 0 );
		add_action( 'after_setup_theme', array( $this, 'metabox_init' ), 10 );
		
	}
	
	
	public static function getInstance() {
		if ( !self::$instance ) {
			self::$instance = new self;
		}
		return self::$instance;
	}
	
	
	public function salient_core_enqueue_assets() {

			wp_register_style( 'salient-wpbakery-addons', plugins_url('/css/salient-wpbakery-addons-basic.css', __FILE__),'', $this->plugin_version );
			
			wp_register_script( 'salient-wpbakery-addons', plugins_url('/js/init.js', __FILE__),'', $this->plugin_version );
			wp_register_script( 'twentytwenty', plugins_url('/js/third-party/jquery.twentytwenty.js', __FILE__) , 'jquery', $this->plugin_version, true );
			wp_register_script( 'touchswipe', plugins_url('/js/third-party/touchswipe.min.js', __FILE__), 'jquery', '1.0', true );
			
	    // Enqueue assets when Salient is not active.
			if( ! defined( 'NECTAR_THEME_NAME' ) ) {
				
				// Register CSS.
				wp_register_style( 'font-awesome', plugins_url('/css/font-awesome.min.css', __FILE__),'', $this->plugin_version );
				wp_register_style( 'leaflet', plugins_url('/css/leaflet.css', __FILE__),'', $this->plugin_version );
				
				// Register JS.
				wp_register_script( 'nectar-testimonial-sliders', plugins_url('/js/nectar-testimonial-slider.js', __FILE__) , 'jquery', $this->plugin_version, true );
				wp_register_script( 'leaflet', plugins_url('/js/third-party/leaflet.js', __FILE__), 'jquery', $this->plugin_version, true );
				wp_register_script( 'nectar-leaflet-map', plugins_url('/js/nectar-leaflet-map.js', __FILE__), 'jquery', $this->plugin_version, true );
				
				// Enqueue CSS.
				wp_enqueue_style( 'font-awesome' );
		    wp_enqueue_style( 'salient-wpbakery-addons' );
				
				// Enqueue JS.
				wp_enqueue_script( 'jquery' );
				wp_enqueue_script( 'touchswipe' );
				wp_enqueue_script( 'twentytwenty' );
				wp_enqueue_script( 'nectar-testimonial-sliders' );
				wp_enqueue_script( 'salient-wpbakery-addons' );
			}
			
	}
	
	
	public function salient_core_metabox_styles() {
    wp_enqueue_style( 'salient-metaboxes-meta-css', plugins_url('includes/admin/assets/css/meta.css', __FILE__) , '', $this->plugin_version );
  }
	
	
	public function salient_core_edit_scripts() {
		
		if( ! defined( 'NECTAR_THEME_NAME' ) ) {
      wp_register_script( 'salient-upload', plugins_url('includes/admin/assets/js/meta.js', __FILE__), array( 'jquery' ), $this->plugin_version );
      wp_enqueue_script( 'salient-upload' );
    } else {
      wp_enqueue_script( 'nectar-upload' );
    }

    wp_enqueue_style( 'wp-color-picker' );
    wp_enqueue_script(
      'nectar-add-media',
      plugins_url('includes/admin/assets/js/add-media.js', __FILE__),
      array( 'jquery' ),
      '8.5.4',
      true
    );
		
		wp_enqueue_media();
	}


	public function salient_core_load_textdomain() {
		load_plugin_textdomain( 'salient-core', false, plugin_basename( dirname( __FILE__ ) ) . '/languages' );
	}
	
	
	public function init() {
			
			// Before init.
			do_action( 'before_salient_core_init' );
			
			// Salient WPBakery addons helpers.
			if( ! defined( 'NECTAR_THEME_NAME' ) ) {
				require_once( SALIENT_CORE_ROOT_DIR_PATH.'includes/helpers.php' );
			}
			
			// WPBakery addons initialize.
			require_once( SALIENT_CORE_ROOT_DIR_PATH.'includes/wpbakery-init.php' );
		
			// After init.
			do_action( 'salient_core_init' );
			
	}
	
	public function metabox_init() {
			
			// Before metabox init.
			do_action( 'before_salient_metaboxes_init' );
			
      // Meta boxes.
      if( ! function_exists('nectar_create_meta_box') || ! function_exists('nectar_reg_meta_box') ) {
        require_once( SALIENT_CORE_ROOT_DIR_PATH.'includes/admin/meta-config.php');
      }
      require_once( SALIENT_CORE_ROOT_DIR_PATH.'includes/admin/page-meta.php');
      require_once( SALIENT_CORE_ROOT_DIR_PATH.'includes/admin/post-meta.php');
			
			// After metabox init.
			do_action( 'salient_metaboxes_init' );
			
	}

	
}

// Plugin init.
global $Salient_Core;
$Salient_Core = Salient_Core::getInstance();