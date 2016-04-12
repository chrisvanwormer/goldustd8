<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 * use this to var dump:
 *  <?php
 * print '<pre>';
 *   var_dump($theme_hook_suggestions);
 *  print '</pre>';
 * ?>
 */

?>

<div id="page" class="page">

  <div id="main" class="main" role="main">

    <div class="header">
        <?php print render($page['highlighted']); ?>
        <?php print $breadcrumb; ?>
    </div>
    <div id="content" class="content">
      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <a id="main-content"></a>
      <?php print render($page['content']); ?>
      <?php print $feed_icons; ?>
    </div>

    <?php
      // Render the sidebars to see if there's anything in them.
      $sidebar_first  = render($page['sidebar_first']);
      $sidebar_second = render($page['sidebar_second']);
    ?>

    <?php if ($sidebar_first || $sidebar_second): ?>
      <aside class="sidebars">
        <?php print $sidebar_first; ?>
        <?php print $sidebar_second; ?>
      </aside>
    <?php endif; ?>

  </div>

</div>