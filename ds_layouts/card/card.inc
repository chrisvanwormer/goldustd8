<?php
function ds_card() {
  return array(
    'label' => t('Goldust: Card View'),
    'regions' => array(
      'header' => t('Header'),
      'teaser' => t('Teaser'),
      'action' => t('Action'),
    ),
    // Add this line if there is a default css file.
    // 'css' => TRUE,
    // Add this line if you're using DS 2.x for icon preview
    // 'image' => TRUE,
  );
}
