<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Brand
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>
<body>
  <div class="container-fluid">
    <div class="container-fluid">
      <div class="main-landing container">
        <div class="menu-fixed container">
          <!-- header -->
          <header class="header row-header container">
            <!-- left-header -->
            <div class="header-left">
              <div class="header-logo logo-1"><span>K</span></div>
              <div class="header-plus"><span class="plus">+</span></div>
              <div class="header-logo"><span>K</span></div>
              <!-- <div class="header-logo">
                <span>K</span>
              </div> -->
            </div>
						<!-- /left-header -->
						<div class="header-center">
							<img src="http://pblhelka.myjino.ru/k&K/wp-content/themes/k&kTheme/images/logo.png" alt="">
						</div>
            <!-- right-header -->
            <div class="header-right date"><span class="date-time"></span> <span class="date-number"></span> <span class="date-day"></span></div><!-- /right-header -->
          </header><!-- /header -->
</div>
