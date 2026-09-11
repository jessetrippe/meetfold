(() => {
  const stories = [
    {title: 'The pleasure of noticing small things', source: 'Field Notes', date: 'May 12, 2026', text: 'There is a particular kind of attention that begins when we stop looking for something new.'},
    {title: 'A garden that takes its time', source: 'Weekend Letters', date: 'March 8, 2026', text: 'A garden rewards attention. The smallest changes are often the ones worth remembering.'},
    {title: 'Making room for a slower morning', source: 'Design Journal', date: 'February 21, 2026', text: 'Good design makes room for the things we want to spend time with.'}
  ];
  const query = document.getElementById('library-query');
  const results = document.getElementById('library-results');
  function highlight(element, text, term) {
    if (!term) { element.textContent = text; return; }
    let start = 0, found;
    while ((found = text.toLowerCase().indexOf(term, start)) !== -1) {
      element.append(document.createTextNode(text.slice(start, found)));
      const mark = document.createElement('mark');
      mark.textContent = text.slice(found, found + term.length);
      element.append(mark); start = found + term.length;
    }
    element.append(document.createTextNode(text.slice(start)));
  }
  function search() {
    const term = query.value.trim().toLowerCase(); results.replaceChildren();
    const matches = stories.filter(s => [s.title, s.source, s.text].join(' ').toLowerCase().includes(term));
    for (const story of matches) {
      const article = document.createElement('article'); article.className = 'search-result';
      const title = document.createElement('h3'); highlight(title, story.title, term);
      const meta = document.createElement('p'); meta.className = 'result-meta'; meta.textContent = story.source + ' · ' + story.date;
      const text = document.createElement('p'); highlight(text, story.text, term);
      article.append(title, meta, text); results.append(article);
    }
    if (!matches.length) { const empty = document.createElement('p'); empty.className = 'empty-example'; empty.textContent = 'No sample articles match. Try attention, garden, or design.'; results.append(empty); }
  }
  query.addEventListener('input', search); search();
  const prompt = document.getElementById('include-prompt');
  const preview = document.getElementById('share-preview');
  const status = document.getElementById('copy-status');
  function updateShare() {
    preview.textContent = (prompt.checked ? 'Summarize this article and suggest three questions to think about.\n\n' : '') + 'The pleasure of noticing small things\nField Notes · May 12, 2026\nhttps://example.com/field-notes/noticing\n\n' + stories[0].text;
    status.textContent = '';
  }
  prompt.addEventListener('change', updateShare); updateShare();
  document.getElementById('copy-example').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(preview.textContent); status.textContent = 'Copied. Ready to paste.'; }
    catch { status.textContent = 'Select the example text above to copy it.'; }
  });
})();
