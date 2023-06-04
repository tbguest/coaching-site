import * as prismic from "@prismicio/client";
import sm from "./sm.json";
// import * as prismicH from '@prismicio/helpers'

export const retreatLinkResolver = (doc) => {
  if (doc.type === "retreat-page") {
    return `/retreats/${doc.uid}`;
  }

  return "/retreats";
};

export const linkResolver = (doc) => {
  if (doc.type === "page") {
    return `/${doc.uid}`;
  }

  return "/";
};

export function createClient(options) {
  return prismic.createClient(sm.apiEndpoint, options);
}

export const imageLoader = ({ src, width, height, quality }) => {
  return `${src}?auto=compress,format&w=${width}&h=${height}&q=${
    quality || 75
  }`;
};
