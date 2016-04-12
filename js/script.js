/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document) {
  'use strict';

// To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.psc_zen_scripts = {
    attach: function (context, settings) {

      /** @type {Boolean} Boolean for detecting '.oldie' class (IE8-) */
      var isOldie = $('.oldie').length;

      /** @type {string} The URL of the current page */
      var theURL = document.location;

      /** @type {string} All links inside the NYS Global Nav */
      var navLinks = $('#nys-global-nav').find('a');

      /**
       * Add an active class to the nav item. Styling it for our breadcrumbs
       * @todo Remove this once Gregg adds active trail back to global nav
       * @todo See: https://www.drupal.org/node/2653734
       */
      navLinks.each(function () {

        /** @type {jQuery Object} '#nys-global-nav' .find('a') */
        var $this = $(this);

        /** @type {string} Text of nav link */
        var linkText = $this.text().toLowerCase();

        /** @type {string} HREF of nav link */
        var hrefVal = $this.attr('href').toLowerCase();

        /** @type {string} Current URL (forced lowercase for comparison) */
        var theURLLower = theURL.pathname.toLowerCase();

        /** @type {boolean} URL contains Href value of link */
        var hasHref = theURLLower.indexOf(hrefVal) > -1;

        /** @type {Boolean} URL contains Text value of link */
        var hasText = theURLLower.indexOf(linkText) > -1;

        /** @type {Boolean} Is a top level nav item with no href value */
        var hasNoLinkClass = $this.hasClass('nolink');

        /**
         * Add the 'active-trail' class to items if they have Href, or are top
         * level hosts of Href valid links
         */
        if (hasHref || (hasText && hasNoLinkClass)) {
          $this.addClass('active-trail');
        }
      });

      // This places ellipsis on the heading and text snippets for the cards.
      // TODO FIX IE8 Breaking.
      if (!isOldie) {
        $('.ds-card h2, .cd-card h3, .ds-card-short h2').dotdotdot({
          watch: 'window'
        });
      }

      // Here we append the background image overlay in IE 8 and lower.
      if (isOldie) {
        $('<div/>', {

          /** @todo Remove quotes from here with dropping IE8
           *  Also, fix .eslint to re-enable quote-props
           */
          'class': 'featured-image-overlay'
        }).appendTo('.field-news-s-img-featured-img, .field-hpfeat-s-img-featimg');
      }

      // On events list pages, Map doesnt link to Event
      // This finds each link and wraps it around the map image
      if ($('.view-display-id-events_upcoming_block').length > 0) {
        $('.ds-card').each(function () {
          var $this = $(this);
          var theLink = $this.find('.info-row').find('a').attr('href');
          var theMap = $this.find('img');

          theMap.wrap(function () {
            return '<a href="' + theLink + '">';
          });
        });
      }

      // On Maps list pages, featured image/ Titles don't link to File DL
      // This finds the DL link and wraps it around the image and Title
      if ($('.view-maps-list').length > 0) {
        $('.ds-card').each(function () {
          var $this = $(this);
          var theLink = $this.find('.action-wrapper').find('a').attr('href');
          var theImg = $this.find('.header-wrapper a');
          var theTitle = $this.find('h2 a');

          theImg.attr('href', theLink);
          theTitle.attr('href', theLink);
        });
      }

    }
  };

})(jQuery, Drupal, this, this.document);
