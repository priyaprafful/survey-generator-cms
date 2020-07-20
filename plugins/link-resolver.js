/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found';
  }

  // SWEDISH (DEFAULT)
  if (doc.lang === 'sv-se') {
    if (doc.type === 'home') {
      return '/';
    }

    if (doc.type === 'post') {
      return '/nyheter/' + doc.uid;
    }

    if (doc.type === 'contact') {
      return '/kontakt';
    }
  }

  // ENGLISH
  if (doc.lang === 'en-gb') {
    if (doc.type === 'home') {
      return '/en';
    }

    if (doc.type === 'post') {
      return '/en/news' + doc.uid;
    }

    if (doc.type === 'contact') {
      return '/en/contact';
    }
  }

  return '/not-found';
}
