<?php
/**
 * ThemeREX Framework: Admin functions
 *
 * @package	green
 * @since	green 1.0
 */

// Disable direct call
if ( ! defined( 'ABSPATH' ) ) { exit; }

/* Admin actions and filters:
------------------------------------------------------------------------ */

if (is_admin()) {

	/* Theme setup section
	-------------------------------------------------------------------- */
	
	if ( !function_exists( 'green_admin_theme_setup' ) ) {
		add_action( 'green_action_before_init_theme', 'green_admin_theme_setup', 11 );
		function green_admin_theme_setup() {
			if ( is_admin() ) {
				add_action("admin_head",			'green_admin_prepare_scripts');
				add_action("admin_enqueue_scripts",	'green_admin_load_scripts');
				add_action('tgmpa_register',		'green_admin_register_plugins');

				// AJAX: Get terms for specified post type
				add_action('wp_ajax_green_admin_change_post_type', 		'green_callback_admin_change_post_type');
				add_action('wp_ajax_nopriv_green_admin_change_post_type','green_callback_admin_change_post_type');
			}
		}
	}
	
	// Load required styles and scripts for admin mode
	if ( !function_exists( 'green_admin_load_scripts' ) ) {
		//add_action("admin_enqueue_scripts", 'green_admin_load_scripts');
		function green_admin_load_scripts() {
			green_enqueue_script( 'green-debug-script', green_get_file_url('js/core.debug.js'), array('jquery'), null, true );
			//if (green_options_is_used()) {
				green_enqueue_style( 'green-admin-style', green_get_file_url('css/core.admin.css'), array(), null );
			//}
			if (green_strpos($_SERVER['REQUEST_URI'], 'widgets.php')!==false) {
				green_enqueue_style( 'green-fontello-style', green_get_file_url('css/fontello-admin/css/fontello-admin.css'), array(), null );
				green_enqueue_style( 'green-animations-style', green_get_file_url('css/fontello-admin/css/animation.css'), array(), null );
				green_enqueue_script( 'green-admin-script', green_get_file_url('js/core.admin.js'), array('jquery'), null, true );
			}
		}
	}
	
	// Prepare required styles and scripts for admin mode
	if ( !function_exists( 'green_admin_prepare_scripts' ) ) {
		//add_action("admin_head", 'green_admin_prepare_scripts');
		function green_admin_prepare_scripts() {
			?>
			<script>
				if (typeof GREEN_GLOBALS == 'undefined') var GREEN_GLOBALS = {};
				jQuery(document).ready(function() {
					GREEN_GLOBALS['admin_mode']	= true;
					GREEN_GLOBALS['ajax_nonce'] 	= "<?php echo wp_create_nonce('ajax_nonce'); ?>";
					GREEN_GLOBALS['ajax_url']	= "<?php echo admin_url('admin-ajax.php'); ?>";
					GREEN_GLOBALS['user_logged_in'] = true;
				});
			</script>
			<?php
		}
	}
	
	// AJAX: Get terms for specified post type
	if ( !function_exists( 'green_callback_admin_change_post_type' ) ) {
		//add_action('wp_ajax_green_admin_change_post_type', 		'green_callback_admin_change_post_type');
		//add_action('wp_ajax_nopriv_green_admin_change_post_type',	'green_callback_admin_change_post_type');
		function green_callback_admin_change_post_type() {
			if ( !wp_verify_nonce( $_REQUEST['nonce'], 'ajax_nonce' ) )
				die();
			$post_type = $_REQUEST['post_type'];
			$terms = green_get_list_terms(false, green_get_taxonomy_categories_by_post_type($post_type));
			$terms = green_array_merge(array(0 => esc_html__('- Select category -', 'green')), $terms);
			$response = array(
				'error' => '',
				'data' => array(
					'ids' => array_keys($terms),
					'titles' => array_values($terms)
				)
			);
			echo json_encode($response);
			die();
		}
	}

	// Return current post type in dashboard
	if ( !function_exists( 'green_admin_get_current_post_type' ) ) {
		function green_admin_get_current_post_type() {
			global $post, $typenow, $current_screen;
			if ( $post && $post->post_type )							//we have a post so we can just get the post type from that
				return $post->post_type;
			else if ( $typenow )										//check the global $typenow — set in admin.php
				return $typenow;
			else if ( $current_screen && $current_screen->post_type )	//check the global $current_screen object — set in sceen.php
				return $current_screen->post_type;
			else if ( isset( $_REQUEST['post_type'] ) )					//check the post_type querystring
				return sanitize_key( $_REQUEST['post_type'] );
			else if ( isset( $_REQUEST['post'] ) ) {					//lastly check the post id querystring
				$post = get_post( sanitize_key( $_REQUEST['post'] ) );
				return !empty($post->post_type) ? $post->post_type : '';
			} else														//we do not know the post type!
				return '';
		}
	}
	
	// Register optional plugins
	if ( !function_exists( 'green_admin_register_plugins' ) ) {
		function green_admin_register_plugins() {

			$plugins = apply_filters('green_filter_required_plugins', array(
				array(
					'name' 		=> 'WooCommerce',
					'slug' 		=> 'woocommerce',
					'required' 	=> false
				),
				array(
					'name' 		=> 'Visual Composer',
					'slug' 		=> 'js_composer',
					'source'	=> green_get_file_dir('plugins/js_composer.zip'),
					'required' 	=> false
				),
				array(
					'name' 		=> 'Revolution Slider',
					'slug' 		=> 'revslider',
					'source'	=> green_get_file_dir('plugins/revslider.zip'),
					'required' 	=> false
				),
				array(
					'name' 		=> 'Tribe Events Calendar',
					'slug' 		=> 'the-events-calendar',
					'source'	=> green_get_file_dir('plugins/the-events-calendar.zip'),
					'required' 	=> false
				),
				array(
					'name' 		=> 'Instagram Widget',
					'slug' 		=> 'wp-instagram-widget',
					'source'	=> green_get_file_dir('plugins/wp-instagram-widget.zip'),
					'required' 	=> false
				),
				array(
					'name' 		=> 'Essential Grid',
					'slug' 		=> 'essential-grid',
					'source'	=> green_get_file_dir('plugins/essential-grid.zip'),
					'required' 	=> false
				)
			));
			$config = array(
				'domain'			=> 'green',					// Text domain - likely want to be the same as your theme.
				'default_path'		=> '',							// Default absolute path to pre-packaged plugins
				'parent_menu_slug'	=> 'themes.php',				// Default parent menu slug
				'parent_url_slug'	=> 'themes.php',				// Default parent URL slug
				'menu'				=> 'install-required-plugins',	// Menu slug
				'has_notices'		=> true,						// Show admin notices or not
				'is_automatic'		=> true,						// Automatically activate plugins after installation or not
				'message'			=> '',							// Message to output right before the plugins table
				'strings'			=> array(
					'page_title'						=> esc_html__( 'Install Required Plugins', 'green' ),
					'menu_title'						=> esc_html__( 'Install Plugins', 'green' ),
					'installing'						=> esc_html__( 'Installing Plugin: %s', 'green' ), // %1$s = plugin name
					'oops'								=> esc_html__( 'Something went wrong with the plugin API.', 'green' ),
					'notice_can_install_required'		=> _n_noop( 'This theme requires the following plugin: %1$s.', 'This theme requires the following plugins: %1$s.', 'green' ), // %1$s = plugin name(s)
					'notice_can_install_recommended'	=> _n_noop( 'This theme recommends the following plugin: %1$s.', 'This theme recommends the following plugins: %1$s.', 'green' ), // %1$s = plugin name(s)
					'notice_cannot_install'				=> _n_noop( 'Sorry, but you do not have the correct permissions to install the %s plugin. Contact the administrator of this site for help on getting the plugin installed.', 'Sorry, but you do not have the correct permissions to install the %s plugins. Contact the administrator of this site for help on getting the plugins installed.', 'green' ), // %1$s = plugin name(s)
					'notice_can_activate_required'		=> _n_noop( 'The following required plugin is currently inactive: %1$s.', 'The following required plugins are currently inactive: %1$s.', 'green' ), // %1$s = plugin name(s)
					'notice_can_activate_recommended'	=> _n_noop( 'The following recommended plugin is currently inactive: %1$s.', 'The following recommended plugins are currently inactive: %1$s.', 'green' ), // %1$s = plugin name(s)
					'notice_cannot_activate'			=> _n_noop( 'Sorry, but you do not have the correct permissions to activate the %s plugin. Contact the administrator of this site for help on getting the plugin activated.', 'Sorry, but you do not have the correct permissions to activate the %s plugins. Contact the administrator of this site for help on getting the plugins activated.', 'green' ), // %1$s = plugin name(s)
					'notice_ask_to_update'				=> _n_noop( 'The following plugin needs to be updated to its latest version to ensure maximum compatibility with this theme: %1$s.', 'The following plugins need to be updated to their latest version to ensure maximum compatibility with this theme: %1$s.', 'green' ), // %1$s = plugin name(s)
					'notice_cannot_update'				=> _n_noop( 'Sorry, but you do not have the correct permissions to update the %s plugin. Contact the administrator of this site for help on getting the plugin updated.', 'Sorry, but you do not have the correct permissions to update the %s plugins. Contact the administrator of this site for help on getting the plugins updated.', 'green' ), // %1$s = plugin name(s)
					'install_link'						=> _n_noop( 'Begin installing plugin', 'Begin installing plugins', 'green' ),
					'activate_link'						=> _n_noop( 'Activate installed plugin', 'Activate installed plugins', 'green' ),
					'return'							=> esc_html__( 'Return to Required Plugins Installer', 'green' ),
					'plugin_activated'					=> esc_html__( 'Plugin activated successfully.', 'green' ),
					'complete'							=> esc_html__( 'All plugins installed and activated successfully. %s', 'green'), // %1$s = dashboard link
					'nag_type'							=> 'updated' // Determines admin notice type - can only be 'updated' or 'error'
				)
			);
	
			tgmpa( $plugins, $config );
		}
	}

	require_once( green_get_file_dir('lib/tgm/class-tgm-plugin-activation.php') );

	require_once( green_get_file_dir('tools/emailer/emailer.php') );
	require_once( green_get_file_dir('tools/po_composer/po_composer.php') );
}

?>