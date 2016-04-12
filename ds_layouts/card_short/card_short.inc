<?php
function ds_card_short() {
  return array(
    'label' => t('Goldust: Card View - Short'),
    'regions' => array(
      'header' => t('Header'),
      'date' => t('Date'),
      'location' => t('Location'),
      'action' => t('Action'),
    ),
    // Add this line if there is a default css file.
    // 'css' => TRUE,
    // Add this line if you're using DS 2.x for icon preview
    // 'image' => TRUE,
  );
}
