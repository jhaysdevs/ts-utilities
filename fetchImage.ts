async function fetchImage() {
  try {
    const response = await fetch('flowers.jpg')
    if (!response.ok) {
      throw new Error('Network response was not OK')
    }
    const myBlob = await response.blob()
    myImage.src = URL.createObjectURL(myBlob)
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error)
  }
}
