import tailwindcss from 'eleventy-plugin-tailwindcss-4'

export default (eleventyConfig) => {
  eleventyConfig.addPlugin(tailwindcss, {
    input: 'css/tailwind.css',
    output:'css/styles.css'
  });
  eleventyConfig.addPassthroughCopy("src/images");

  // Add date filters
  eleventyConfig.addFilter("dateIso", date => {
    return date.toISOString();
  });

  eleventyConfig.addFilter("dateDisplay", date => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Create the news collection
  eleventyConfig.addCollection("news", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/news/*.md");
  });
};

export const config = {
  htmlTemplateEngine: "njk",
  dir: {
    input: "src",
    output: "dist"
  },
};