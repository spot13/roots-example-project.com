<?php

// Disable direct call
if ( ! defined( 'ABSPATH' ) ) { exit; }


/* Theme setup section
-------------------------------------------------------------------- */

if ( !function_exists( 'green_template_news_theme_setup' ) ) {
	add_action( 'green_action_before_init_theme', 'green_template_news_theme_setup', 1 );
	function green_template_news_theme_setup() {
		green_add_template(array(
			'layout' => 'news',
			'mode'   => 'blogger',
			'need_columns' => true,
			'title'  => esc_html__('Blogger layout: News', 'green'),
			'thumb_title'  => esc_html__('Medium image (crop)', 'green'),
			'w'		 => 400,
			'h'		 => 225
		));
	}
}

// Template output
if ( !function_exists( 'green_template_news_output' ) ) {
	function green_template_news_output($post_options, $post_data) {
		if (green_sc_param_is_on($post_options['scroll'])) green_enqueue_slider();
		require(green_get_file_dir('templates/parts/reviews-summary.php'));
		$title_tag = $post_options['columns_count'] > 0 ? 'h6' : 'h4';
		$title = '<'.esc_attr($title_tag).' class="post_title sc_title sc_blogger_title">'
			. (!isset($post_options['links']) || $post_options['links'] ? '<a href="' . esc_url($post_data['post_link']) . '">' : '')
			. ($post_data['post_title'])
			. (!isset($post_options['links']) || $post_options['links'] ? '</a>' : '')
			. '</'.esc_attr($title_tag).'>'
			. ($reviews_summary);
		
		if (green_sc_param_is_on($post_options['scroll']) || ($post_options['dir'] == 'horizontal' && $post_options['columns_count'] > 0)) {
			?>
			<div class="<?php echo 'column-1_'.esc_attr($post_options['columns_count']).' column_item_'.esc_attr($post_options['number']); ?><?php 
				echo  ($post_options['number'] % 2 == 1 ? ' odd' : ' even')
					. ($post_options['number'] == 1 ? ' first' : '')
					. ($post_options['number'] == $post_options['posts_on_page'] ? ' last' : '');
					//. (green_sc_param_is_on($post_options['scroll']) ? ' sc_scroll_slide swiper-slide' : '');
					?>">
			<?php
		}
		?>
		
		<div class="post_item post_item_news sc_blogger_item<?php echo ($post_options['number'] == $post_options['posts_on_page'] && !green_sc_param_is_on($post_options['loadmore']) ? ' sc_blogger_item_last' : '');
			//. (green_sc_param_is_on($post_options['scroll']) && $post_options['dir'] == 'vertical' ? ' sc_scroll_slide swiper-slide' : '');
			?>">
			<?php 
			if ($post_data['post_video'] || $post_data['post_audio'] || $post_data['post_thumb'] ||  $post_data['post_gallery']) {
				?>
				<div class="post_featured">
					<?php require(green_get_file_dir('templates/parts/post-featured.php')); ?>
				</div>
				<?php
			}
			
			echo ($title);
			?>
			
			<div class="post_content sc_blogger_content">
				<?php
				if (green_sc_param_is_on($post_options['info'])) {
					$info_parts = array('author' => false);
					require(green_get_file_dir('templates/parts/post-info.php')); 
				}

				if ($post_options['descr'] > 0) {
					?>
					<div class="post_descr">
					<?php
						if ($post_data['post_protected']) {
							echo ($post_data['post_excerpt']);
						} else {
							if ($post_data['post_excerpt']) {
								echo in_array($post_data['post_format'], array('quote', 'link', 'chat', 'aside', 'status')) ? $post_data['post_excerpt'] : '<p>'.trim(green_strshort($post_data['post_excerpt'], isset($post_options['descr']) ? $post_options['descr'] : green_get_custom_option('post_excerpt_maxlength_masonry'))).'</p>';
							}
							if (empty($post_options['readmore'])) $post_options['readmore'] = esc_html__('READ MORE', 'green');
							if (!green_sc_param_is_off($post_options['readmore']) && !in_array($post_data['post_format'], array('quote', 'link', 'chat', 'aside', 'status'))) {
								echo do_shortcode('[trx_button link="'.esc_url($post_data['post_link']).'"]'.($post_options['readmore']).'[/trx_button]');
							}
						}
					?>
					</div>
					<?php
				}

				if (empty($post_options['readmore'])) $post_options['readmore'] = esc_html__('READ MORE', 'green');
				if (!green_sc_param_is_off($post_options['readmore']) && !in_array($post_data['post_format'], array('quote', 'link', 'chat', 'aside', 'status'))) {
					echo do_shortcode('[trx_button link="'.esc_url($post_data['post_link']).'"]'.($post_options['readmore']).'[/trx_button]');
				}
				?>

			</div>	<!-- /.post_content -->

		</div>		<!-- /.post_item -->
		<?php
		if (green_sc_param_is_on($post_options['scroll']) || ($post_options['dir'] == 'horizontal' && $post_options['columns_count'] > 0)) {
			?>
			</div>	<!-- /.column-1_x -->
			<?php
		}
	}
}
?>