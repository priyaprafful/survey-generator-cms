/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found';
  }

  if (doc.type === 'home') {
    return '/';
  }

  if (doc.type === 'post') {
    return '/nyheter/' + doc.uid;
  }

  return '/not-found';
}
