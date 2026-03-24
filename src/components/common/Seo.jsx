import { useEffect } from "react";

function Seo({ title, description }) {
  useEffect(() => {
    const pageTitle = title
      ? `${title} | Nexio Tech Solutions`
      : "Nexio Tech Solutions | Building Next-Gen Digital Solutions";

    document.title = pageTitle;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", description);

    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (!ogTitleTag) {
      ogTitleTag = document.createElement("meta");
      ogTitleTag.setAttribute("property", "og:title");
      document.head.appendChild(ogTitleTag);
    }
    ogTitleTag.setAttribute("content", pageTitle);

    let ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (!ogDescriptionTag) {
      ogDescriptionTag = document.createElement("meta");
      ogDescriptionTag.setAttribute("property", "og:description");
      document.head.appendChild(ogDescriptionTag);
    }
    ogDescriptionTag.setAttribute("content", description);

    let ogTypeTag = document.querySelector('meta[property="og:type"]');
    if (!ogTypeTag) {
      ogTypeTag = document.createElement("meta");
      ogTypeTag.setAttribute("property", "og:type");
      document.head.appendChild(ogTypeTag);
    }
    ogTypeTag.setAttribute("content", "website");
  }, [description, title]);

  return null;
}

export default Seo;
