<?php

/**
 * @file
 * Display Suite Goldust Theme Card.
 */
?>
<<?php print $layout_wrapper; print $layout_attributes; ?> class="ds-card-short <?php print $classes;?> clearfix">

  <?php if (isset($title_suffix['contextual_links'])): ?>
  <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  <div class="card-wrapper">

    <<?php print $header_wrapper ?> class="header-wrapper<?php print $header_classes; ?>">
      <?php print $header; ?>
    </<?php print $header_wrapper ?>>

    <div class="info-row">

      <<?php print $date_wrapper ?> class="date-wrapper<?php print $date_classes; ?>">
        <?php print $date; ?>
      </<?php print $date_wrapper ?>>

      <<?php print $location_wrapper ?> class="location-wrapper<?php print $location_classes; ?>">
        <?php print $location; ?>
      </<?php print $location_wrapper ?>>

    </div>

    <<?php print $action_wrapper ?> class="action-wrapper<?php print $action_classes; ?>">
      <?php print $action; ?>
    </<?php print $action_wrapper ?>>
  </div>

</<?php print $layout_wrapper ?>>

<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
