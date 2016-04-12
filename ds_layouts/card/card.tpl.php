<?php

/**
 * @file
 * Display Suite Goldust Theme Card.
 */
?>
<<?php print $layout_wrapper; print $layout_attributes; ?> class="ds-card <?php print $classes;?> clearfix">

  <?php if (isset($title_suffix['contextual_links'])): ?>
  <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  <div class="card-wrapper">

    <<?php print $header_wrapper ?> class="header-wrapper<?php print $header_classes; ?>">
      <?php print $header; ?>
    </<?php print $header_wrapper ?>>

    <div class="info-row">

      <<?php print $teaser_wrapper ?> class="teaser-wrapper<?php print $teaser_classes; ?>">
        <?php print $teaser; ?>
      </<?php print $teaser_wrapper ?>>

      <<?php print $action_wrapper ?> class="action-wrapper<?php print $action_classes; ?>">
        <?php print $action; ?>
      </<?php print $action_wrapper ?>>

    </div>

  </div>

</<?php print $layout_wrapper ?>>

<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
