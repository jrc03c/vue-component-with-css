function createVueComponentWithCSS(component) {
  let count = 0
  let styleElement

  component = component || {}

  const data = component.data ? component.data : function () {}
  const mounted = component.mounted ? component.mounted : function () {}
  const unmounted = component.unmounted ? component.unmounted : function () {}

  if (!data.css) data.css = ""

  component.data = function () {
    const self = this
    return data.bind(self)()
  }

  component.mounted = function () {
    const self = this
    mounted.bind(self)()

    count++

    if (!styleElement) {
      styleElement = document.createElement("style")
      document.body.appendChild(styleElement)
      styleElement.innerHTML = self.css
    }
  }

  component.unmounted = function () {
    const self = this
    unmounted.bind(self)()

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
