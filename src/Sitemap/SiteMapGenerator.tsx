interface ISiteMap {
  urls: string[];
  language: string;
}

export const SiteMapGenerator: React.FC<ISiteMap> = ({ urls, language }) => {
  const replaceAmpersand = (url: string) => {
    return url.replace(/&/g, "&amp;");
  };

  const generateSitemap = () => {
    const xmlContent =
      '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
      urls
        .map(
          (url) => `  <url><loc>${encodeURI(replaceAmpersand(url))}</loc></url>`
        )
        .join("\n") +
      "\n</urlset>";

    const blob = new Blob([xmlContent], { type: "text/xml" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `sitemap_${language}.xml`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <button onClick={generateSitemap}>Generate</button>;
};
