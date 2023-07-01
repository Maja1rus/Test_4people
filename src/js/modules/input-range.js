export default class Slider {
    constructor (rangeElement, valueElement, options) {
        this.rangeElement = rangeElement
        this.valueElement = valueElement
        this.options = options
    
        // Attach a listener to "change" event
        this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
    }
  
    // Initialize the slider
    init() {
        this.rangeElement.setAttribute('min', options.min)
        this.rangeElement.setAttribute('max', options.max)
        this.rangeElement.value = options.cur

        this.updateSlider()
    }
  
    // Format the money
    asMoney(value) {
        return parseFloat(value) + ' %'
            .toLocaleString('percent', { maximumFractionDigits: 2 })
    }
  
    updateSlider (newValue) {
        this.valueElement.innerHTML = this.asMoney(this.rangeElement.value)
    }
}
  
