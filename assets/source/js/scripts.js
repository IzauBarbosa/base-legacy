let beforeDevice
let currentDevice

$(document).ready(() => {
  // Helpers
  targetBlank()
  currentDevice = device()

  // components atoms
  screenHeight()

  // components molecules
  backgroundImage()

  // components organisms

  // components templates

  // components pages
})

$(window).on('resize', () => {
  // Helpers
  currentDevice = device()
  if (beforeDevice != currentDevice) {
    beforeDevice = currentDevice
  }

  // components atoms
  screenHeight()

  // components molecules
  backgroundImage()
})
