<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ultra
 * @since ultra 0.9
 * @license GPL 2.0
 */
?>

		</div><!-- .container -->

	</div><!-- #content -->

	<div class="sponsors-wrap">
        	<div class="sponsors-title">Partenaires</div>
       	 	<div class="sponsors-logo"><?php dynamic_sidebar( 'Sponsors' ); ?></div>
	</div>

	<footer id="colophon" class="site-footer">

		<div class="footer-main">

			<?php if ( siteorigin_page_setting( 'display_footer_widgets', true ) ) : ?>
				<div class="container">
					<?php dynamic_sidebar( 'sidebar-2' ); ?>
					<div class="clear"></div>
				</div><!-- .container -->
			<?php endif; ?>
		
		</div><!-- .main-footer -->

		<?php
		if ( siteorigin_setting( 'footer_copyright_text' ) || siteorigin_setting( 'footer_attribution' ) ) {
			get_template_part( 'parts/bottom-bar' );
		}
		?>
		
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>