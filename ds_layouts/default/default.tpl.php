<?php

/**
 * @file
 * Display Suite Goldust Theme Default.
 */
?>
<<?php print $layout_wrapper; print $layout_attributes; ?> class="ds-default <?php print $classes;?> clearfix">

  <?php if (isset($title_suffix['contextual_links'])): ?>
  <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  <<?php print $header_wrapper ?> class="header-wrapper<?php print $header_classes; ?>">
    <?php print $header; ?>

    <<?php print $header_inner_wrapper ?> class="header-wrapper-inner<?php print $header_inner_classes; ?>">
      <?php print $header_inner; ?>
    </<?php print $header_inner_wrapper ?>>

  </<?php print $header_wrapper ?>>

  <<?php print $detail_wrapper ?> class="constrain<?php print $detail_classes; ?>">
    <?php print $detail; ?>
  </<?php print $detail_wrapper ?>>

</<?php print $layout_wrapper ?>>

<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
