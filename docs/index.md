---
hide:
  - navigation
---

# Welcome to MkDocs

Resources
- [](https://squidfunk.github.io/mkdocs-material/)
- [](https://www.youtube.com/watch?v=0pYN6Z-t1-s)
- [](https://www.youtube.com/watch?v=eJVVbZYUYro)
- [](https://dev.to/ar2pi/publish-your-markdown-docs-on-github-pages-6pe)
- [](https://github.com/squidfunk/mkdocs-material)
- [](https://github.com/fire1ce/3os.org/)
- [](https://3os.org/guides/better-terminal-experience/)

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