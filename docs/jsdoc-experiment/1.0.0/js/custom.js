// Custom JavaScript for JSDoc documentation

document.addEventListener('DOMContentLoaded', function() {
    // Add copy button to code blocks
    document.querySelectorAll('pre.prettyprint').forEach(function(block) {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        button.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            padding: 0.25rem 0.5rem;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.8rem;
        `;

        block.style.position = 'relative';
        block.appendChild(button);

        button.addEventListener('click', function() {
            const code = block.querySelector('code').textContent;
            navigator.clipboard.writeText(code).then(function() {
                button.textContent = 'Copied!';
                setTimeout(function() {
                    button.textContent = 'Copy';
                }, 2000);
            });
        });
    });

    // Improve search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const searchResults = document.querySelectorAll('.search-results li');

            searchResults.forEach(function(result) {
                const text = result.textContent.toLowerCase();
                result.style.display = text.includes(searchTerm) ? 'block' : 'none';
            });
        });
    }

    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add table of contents for long pages
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        const headings = mainContent.querySelectorAll('h2, h3');
        if (headings.length > 3) {
            const toc = document.createElement('div');
            toc.className = 'table-of-contents';
            toc.innerHTML = '<h4>Table of Contents</h4><ul></ul>';

            const tocList = toc.querySelector('ul');
            headings.forEach(function(heading) {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.textContent = heading.textContent;
                a.href = '#' + heading.id;
                li.appendChild(a);
                tocList.appendChild(li);
            });

            mainContent.insertBefore(toc, mainContent.firstChild);
        }
    }
});
