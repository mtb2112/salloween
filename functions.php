<?php 
  function my_theme_scripts_function() {
    wp_enqueue_script( 'salloween', get_stylesheet_directory_uri()  . '/js/scripts.js');
  }

  add_action('wp_enqueue_scripts','my_theme_scripts_function');
?>