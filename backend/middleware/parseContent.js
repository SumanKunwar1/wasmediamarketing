const cheerio = require('cheerio');

// Parsing function
function parseContent(html) {
  const $ = cheerio.load(html);
  let content = [];
  let currentSection = {
    sectionTitle: '',
    sectionDescription: '',
    tabs: ''
  };

  // Loop through all elements to process h1, p, and div.tab
  $('body').children().each((i, elem) => {
    const tag = $(elem).prop('tagName').toLowerCase();

    // Process <h1> and <h2> tags for sectionTitle
    if (tag === 'h1' || tag === 'h2') {
      // If currentSection has any content, push it before starting a new section
      if (currentSection.sectionTitle || currentSection.sectionDescription || currentSection.tabs) {
        content.push({ ...currentSection });
      }

      // Set the new section title and reset other fields
      currentSection.sectionTitle = $.html(elem);
      currentSection.sectionDescription = ''; 
      currentSection.tabs = ''; // Reset the tabs for new section
    }

    // Process <p> tags for sectionDescription (text content)
    if (tag === 'p') {
      // If no sectionTitle exists, treat it as a new section with a placeholder title
      if (!currentSection.sectionTitle) {
        currentSection.sectionTitle = '';
      }
      currentSection.sectionDescription += $.html(elem);  // Append raw HTML content of <p>
    }

    // Process <div class="tab"> for tabs content
    if (tag === 'div' && $(elem).hasClass('tab')) {
      // If no sectionTitle exists, treat it as a new section with a placeholder title
      if (!currentSection.sectionTitle) {
        currentSection.sectionTitle = '';
      }
      currentSection.tabs += $.html(elem);  // Capture raw HTML content inside the tab div
    }
  });

  // Push the last section if it has any content
  if (currentSection.sectionTitle || currentSection.sectionDescription || currentSection.tabs) {
    content.push({ ...currentSection });
  }

  return content;
}

module.exports = parseContent;
