# Jin Young Oh — Portfolio

Static personal portfolio for https://joh748.github.io/.

The site presents MinglePlay, ForkFolio, the FinTrack university team project and the local AI Orchestration project. The homepage is a short overview; `/projects/<slug>/` pages hold the engineering detail. MinglePlay and ForkFolio link to public demos; FinTrack links to public team source and attributed contributions. Personal application source repositories remain private. Orca and Chorus are credited as external workflow tools.

## Edit

- `index.html`: introduction, selected projects, education, experience and contact links.
- `projects/*/index.html`: four standalone case studies.
- `styles.css`: the shared responsive, monochrome design.
- `assets/`: actual public product screenshots and the typographic social cover. `cover.svg` is the editable source for `cover.png`.

No install, build or JavaScript is required. Serve this directory with a static HTTP server that resolves directory `index.html` files. GitHub Pages publishes the root of the `main` branch; `.nojekyll` bypasses Jekyll. Root-relative links assume the existing `joh748.github.io` domain.

Existing homepage anchors (`#work`, `#mingleplay`, `#forkfolio`, `#fintrack`, `#orchestration`, `#experience`, `#approach`) remain valid for previously shared links. Keep those IDs when editing the layout. Update `sitemap.xml` when adding case-study pages.

Project information and screenshots were reviewed on 1 November 2026. Pilot status and limitations should be updated as the projects develop. The case studies describe AI-assisted personal development, not unaided authorship or measured commercial outcomes.
