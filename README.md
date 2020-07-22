# Freedom Editor Vanilla Paragraph block

[![License](https://img.shields.io/badge/license-MIT-blue)](https://img.shields.io/github/license/winston0410/freedom-editor) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/freedom-editor-lighterhtml-paragraph-block/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/freedom-editor-lighterhtml-paragraph-block?targetFile=package.json) [![Maintainability](https://api.codeclimate.com/v1/badges/f74e08b360f3796017b7/maintainability)](https://codeclimate.com/github/winston0410/freedom-editor-lighterhtml-paragraph-block/maintainability) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/504ad0b45a2347c89bae8ec7251fad8c)](https://www.codacy.com/manual/winston0410/freedom-editor-lighterhtml-paragraph-block?utm_source=github.com&utm_medium=referral&utm_content=winston0410/freedom-editor-lighterhtml-paragraph-block&utm_campaign=Badge_Grade)

A paragraph block written in vanilla Javascript for Freedom Editor.

## Installation

```
npm i @freedom-editor/vanilla-paragraph-block
```

## Usage

### Import paragraph block

Import paragraph block to the script where you config Freedom Editor. Create a new instance.

```
import { Paragraph } from '@freedom-editor/vanilla-paragraph-block'

const paragraphBlock = new Paragraph()
```

### Register paragraph block in Freedom Editor instance

Register this block in `options.registeredBlocks`.

```
registeredBlocks: [
  paragraphBlock
],
```

### Full example

```
//Pre-bundle by bundler like Rollup.js

import { FreedomEditor } from '@freedom-editor/core'
import { Paragraph } from '@freedom-editor/vanilla-paragraph-block'

const paragraphBlock = new Paragraph()

const editor = new FreedomEditor({
  containerId: 'freedom-editor',
  defaultBlock: paragraphBlock,
  registeredBlocks: {
    paragraphBlock: paragraphBlock
  },
  blockTemplate: [

  ],
  i18n: {
    rtl: 'ltr'
  }
})

editor.init([])

editor.loadBlocks()
```

## API Reference

TODO

## License

This project is licensed under the MIT License - see the [license](https://github.com/winston0410/freedom-editor/LICENSE.md) for more details.
