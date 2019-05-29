<?php
/**
 * Theme sprecific functions and definitions
 */


/* Theme setup section
------------------------------------------------------------------- */

// Set the content width based on the theme's design and stylesheet.
if ( ! isset( $content_width ) ) $content_width = 1170; /* pixels */

// Add theme specific actions and filters
// Attention! Function were add theme specific actions and filters handlers must have priority 1
if ( !function_exists( 'green_theme_setup' ) ) {
	add_action( 'green_action_before_init_theme', 'green_theme_setup', 1 );
	function green_theme_setup() {

		// Register theme menus
		add_filter( 'green_filter_add_theme_menus',		'green_add_theme_menus' );

		// Register theme sidebars
		add_filter( 'green_filter_add_theme_sidebars',	'green_add_theme_sidebars' );

		// Set theme name and folder (for the update notifier)
		add_filter('green_filter_update_notifier', 		'green_set_theme_names_for_updater');
	}
}


// Add/Remove theme nav menus
if ( !function_exists( 'green_add_theme_menus' ) ) {
	//add_filter( 'green_action_add_theme_menus', 'green_add_theme_menus' );
	function green_add_theme_menus($menus) {
		
		//For example:
		//$menus['menu_footer'] = esc_html__('Footer Menu', 'green');
		//if (isset($menus['menu_panel'])) unset($menus['menu_panel']);
		
		if (isset($menus['menu_side'])) unset($menus['menu_side']);
		return $menus;
	}
}


// Add theme specific widgetized areas
if ( !function_exists( 'green_add_theme_sidebars' ) ) {
	//add_filter( 'green_filter_add_theme_sidebars',	'green_add_theme_sidebars' );
	function green_add_theme_sidebars($sidebars=array()) {
		if (is_array($sidebars)) {
			$theme_sidebars = array(
				'sidebar_main'		=> esc_html__( 'Main Sidebar', 'green' ),
				'sidebar_footer'	=> esc_html__( 'Footer Sidebar', 'green' )
			);
			if (green_exists_woocommerce()) {
				$theme_sidebars['sidebar_cart']  = esc_html__( 'WooCommerce Cart Sidebar', 'green' );
			}
			$sidebars = array_merge($theme_sidebars, $sidebars);
		}
		return $sidebars;
	}
}

// Set theme name and folder (for the update notifier)
if ( !function_exists( 'green_set_theme_names_for_updater' ) ) {
	//add_filter('green_filter_update_notifier', 'green_set_theme_names_for_updater');
	function green_set_theme_names_for_updater($opt) {
		$opt['theme_name']   = esc_html__( 'GREEN', 'green' );
		$opt['theme_folder'] = esc_html__( 'green', 'green' );
		return $opt;
	}
}



/* Include framework core files
------------------------------------------------------------------- */

require_once( get_template_directory().'/fw/loader.php' );
?>