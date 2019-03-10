const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".dpdf"]');

$secureLinks.attr('target', 'blank');
