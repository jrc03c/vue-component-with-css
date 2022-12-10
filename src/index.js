function createVueComponentWithCSS(component) {
  let count = 0
  let styleElement

  component = component || {}

  const data = component.data ? component.data() : {}
  const mounted = component.mounted ? component.mounted : () => {}
  const unmounted = component.unmounted ? component.unmounted : () => {}

  if (!data.css) data.css = ""
  component.data = () => data

  component.mounted = function () {
    const self = this
    count++

    if (!styleElement) {
      styleElement = document.createElement("style")
      document.body.appendChild(styleElement)
      styleElement.innerHTML = self.css
    }

    mounted()
  }

  component.unmounted = function () {
    unmounted()

    count--

    if (count < 1) {
      document.body.removeChild(styleElement)
      styleElement = null
    }
  }

  return component
}

if (typeof module !== "undefined") {
  module.exports = createVueComponentWithCSS
}

if (typeof window !== "undefined") {
  window.createVueComponentWithCSS = createVueComponentWithCSS
}
