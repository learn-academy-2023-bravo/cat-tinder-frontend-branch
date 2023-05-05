import React, { useState, useEffect } from 'react'

const Preview = ({ source }) => {
  const [isValidImage, setIsValidImage] = useState(null)

  useEffect(() => {
    async function checkImageValidity() {
      try {
        const response = await fetch(source, { method: 'HEAD' })
        const contentType = response.headers.get('Content-Type')
        setIsValidImage(contentType.startsWith('image'))
      } catch (e) {
        console.log(e)

        setIsValidImage(false)
      }
    }

    checkImageValidity()
  }, [source])

  if (isValidImage === null) {
    return <span>Loading...</span>
  }

  if (isValidImage) {
    return <img className='preview' src={source} />
  }

  return <span>Invalid image URL</span>
}

export default Preview
