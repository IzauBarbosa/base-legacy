let beforeDevice
let currentDevice

$(document).ready(() => {
  // Helpers
  targetBlank()
  currentDevice = device()

  // components
  screenHeight()
  backgroundImage()

  // components pages
})

$(window).on('resize', () => {
  // Helpers
  currentDevice = device()
  if (beforeDevice != currentDevice) {
    beforeDevice = currentDevice
  }

  // components
  screenHeight()
  backgroundImage()
})
