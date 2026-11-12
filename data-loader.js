const XML_DATA_URL = './site-data.xml';

function parseXmlText(rawXml) {
  const parser = new DOMParser();
  return parser.parseFromString(rawXml, 'application/xml');
}

function getXmlText(node, tagName) {
  const el = node.querySelector(tagName);
  return el ? el.textContent.trim() : '';
}

async function loadSiteData() {
  const response = await fetch(XML_DATA_URL, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Gagal memuat data XML.');
  }

  const xmlText = await response.text();
  const xml = parseXmlText(xmlText);

  if (xml.querySelector('parsererror')) {
    throw new Error('Format XML tidak valid.');
  }

  const site = xml.documentElement;
  const portfolio = site.querySelector('portfolio');
  const blog = site.querySelector('blog');

  return {
    portfolio: {
      profile: {
        name: getXmlText(portfolio, 'name'),
        tagline: getXmlText(portfolio, 'tagline'),
        linkedin: getXmlText(portfolio, 'linkedin'),
        github: getXmlText(portfolio, 'github'),
        email: getXmlText(portfolio, 'email'),
        about: getXmlText(portfolio, 'about'),
      },
      skills: [...portfolio.querySelectorAll('skill')].map(skill => ({
        name: getXmlText(skill, 'name'),
        level: Number(skill.getAttribute('level') || 0),
      })),
      projects: [...portfolio.querySelectorAll('project')].map(project => ({
        title: getXmlText(project, 'title'),
        category: project.getAttribute('category') || 'Umum',
        description: getXmlText(project, 'description'),
        tags: [...project.querySelectorAll('tag')].map(tag => tag.textContent.trim()),
        links: [...project.querySelectorAll('link')].map(link => ({
          label: link.getAttribute('label') || 'Link',
          url: link.textContent.trim(),
        })),
      })),
      experience: [...portfolio.querySelectorAll('entry')].map(entry => ({
        period: getXmlText(entry, 'period'),
        title: getXmlText(entry, 'title'),
        organization: getXmlText(entry, 'organization'),
        description: getXmlText(entry, 'description'),
      })),
    },
    blog: {
      title: getXmlText(blog, 'title'),
      description: getXmlText(blog, 'description'),
      posts: [...blog.querySelectorAll('post')].map(post => ({
        id: post.getAttribute('id') || '',
        slug: post.getAttribute('slug') || '',
        title: getXmlText(post, 'title'),
        summary: getXmlText(post, 'summary'),
        category: getXmlText(post, 'category'),
        tags: [...post.querySelectorAll('tag')].map(tag => tag.textContent.trim()),
        readTime: getXmlText(post, 'readTime'),
        published: post.getAttribute('published') || '',
        content: getXmlText(post, 'content'),
      })),
    },
  };
}

if (typeof window !== 'undefined') {
  window.loadSiteData = loadSiteData;
}
