const jsdom = require('jsdom')
const { JSDOM } = jsdom
const dom = new JSDOM('<html><body></body></html>')

global.document = dom.window.document
global.window = dom.window
global.navigator = dom.window.navigator

const { Paragraph } = require('../src/index.js')

describe('Test block essential functionalities:', () => {
  let paragraphBlock, i18n

  beforeEach(() => {
    paragraphBlock = new Paragraph()

    i18n = {
      locale: 'en-US',
      rtl: 'auto'
    }
  })

  it('render() should return an node', () => {
    expect(paragraphBlock.render(i18n)).toHaveClass('freedom-editor-blocks')
  })

  it('render() should return an node with content, when passing in data', () => {
    const blockData = {
      type: paragraphBlock.constructor.name,
      data: {
        text: 'Testing'
      }
    }

    const renderedBlock = paragraphBlock.render(i18n, blockData)

    expect(renderedBlock.querySelector('p').textContent).toContain(blockData.data.text)
  })

  it('save() should return null when the block is empty', () => {
    const block = paragraphBlock.render(i18n)

    expect(paragraphBlock.save(block)).nothing()
  })

  it('save() should return JSON when the block is not empty', () => {
    const block = paragraphBlock.render(i18n)
    const textField = block.querySelector('p')
    textField.textContent = 'Testing'

    expect(paragraphBlock.save(block)).toBeTruthy()
  })
})
