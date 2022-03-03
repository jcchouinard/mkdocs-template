---
hide:
  - navigation
---

# Welcome to your first MkDocs Website

{{ blog_content }}

## Resources to help you
- [MkDocs Material official documentation](https://squidfunk.github.io/mkdocs-material/)
- [Material MkDocs Github Repo](https://github.com/squidfunk/mkdocs-material)
- [Youtube tutorial (1)](https://www.youtube.com/watch?v=0pYN6Z-t1-s)
- [Youtube tutorial (2)](https://www.youtube.com/watch?v=eJVVbZYUYro)
- [Publish your Markdown docs on GitHub Pages](https://dev.to/ar2pi/publish-your-markdown-docs-on-github-pages-6pe)
- [Example them I was inspired by (1)](https://github.com/fire1ce/3os.org/)
- [Example them I was inspired by (2)](https://3os.org/guides/better-terminal-experience/)
- [Blogging Plugin](https://liang2kl.codes/mkdocs-blogging-plugin/)

For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.


```py title="importer.py" hl_lines="4 5"
import pandas as pd

df = pd.read_csv('filename.csv') # (1)
print('highlighted')
print('still highligthed')
print('not highlighted')
```

1.  Import a file

The `#!python read_csv()` function in inline.