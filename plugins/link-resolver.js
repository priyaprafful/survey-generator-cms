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

    if (doc.type === 'about') {
      return '/om-oss';
    }

    if (doc.type === 'book_demo') {
      return '/boka-demo';
    }

    if (doc.type === 'contact') {
      return '/kontakt';
    }

    if (doc.type === 'cookie_policy') {
      return '/om-webbplatsen';
    }

    if (doc.type === 'customer_story') {
      return '/kunder/' + doc.uid;
    }

    if (doc.type === 'customers') {
      return '/kunder';
    }

    if (doc.type === 'news') {
      return '/nyheter';
    }

    if (doc.type === 'platform') {
      return '/verktyget';
    }

    if (doc.type === 'post') {
      return '/nyheter/' + doc.uid;
    }

    if (doc.type === 'pricing') {
      return '/priser';
    }

    if (doc.type === 'privacy_policy') {
      return '/integritetspolicy';
    }

    if (doc.type === 'survey_tool_option') {
      return '/verktyget/' + doc.uid;
    }
  }

  // ENGLISH
  if (doc.lang === 'en-gb') {
    if (doc.type === 'home') {
      return '/en';
    }

    if (doc.type === 'about') {
      return '/en/about';
    }

    if (doc.type === 'book_demo') {
      return '/en/book-demo';
    }

    if (doc.type === 'contact') {
      return '/en/contact';
    }

    if (doc.type === 'cookie_policy') {
      return '/en/cookie-policy';
    }

    if (doc.type === 'customer_story') {
      return '/en/customers/' + doc.uid;
    }

    if (doc.type === 'customers') {
      return '/en/customers';
    }

    if (doc.type === 'news') {
      return '/en/news';
    }

    if (doc.type === 'platform') {
      return '/en/platform';
    }

    if (doc.type === 'post') {
      return '/en/news' + doc.uid;
    }

    if (doc.type === 'pricing') {
      return '/en/pricing';
    }

    if (doc.type === 'privacy_policy') {
      return '/en/privacy-policy';
    }

    if (doc.type === 'survey_tool_option') {
      return '/platform/' + doc.uid;
    }
  }

  return '/not-found';
}
