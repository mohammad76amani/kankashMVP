'use client'
import BlogCard from "@/components/(ui)/BlogCard"
import FileUploadForm from "@/components/(ui)/(admin)/(forms)/FileUploadForm"
import { useEffect, useState } from "react"
import axios from 'axios'
import Image from "next/image"

// Define the Image interface for type safety
interface Image {
  url: string;
  name: string;
  description?: string;
}

const Trending = () => {
  // State management for various components
  const formData = new FormData()
  const [images, setImages] = useState<Image[]>([])
  const [selectedImage, setSelectedImage] = useState('')
  const [postStatus, setPostStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Fetch images from the API on component mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('api/uploadedFiles')
        const filterdImages = response.data.filter((image: any) => image.category === 'trending')
        setImages(filterdImages)
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    fetchImages()
  }, [])

  // Handle image selection from dropdown
  const handleImageSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedImage(event.target.value)
  }

  // Handle form submission to post new trending item
  const postData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setPostStatus('idle');
    setStatusMessage('');
    formData.append('image', selectedImage)
    const inputLink = event.currentTarget.querySelector('.inputLink') as HTMLInputElement;
    if (inputLink && inputLink.value) {
      formData.append('link', inputLink.value);
    }
    try {
      const response = await axios.post('api/trending', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log('Image uploaded successfully:', response.data)
      setPostStatus('success');
      setStatusMessage('Trending item added successfully!');
    } catch (error) {
      console.error('Error uploading image:', error)
      setPostStatus('error');
      setStatusMessage('Failed to add trending item. Please try again.');
    }
  }

  // Render the component
  return (
    <div className="flex h-auto items-center justify-center ">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border-t">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800"> ترند ها</h1>
        <form onSubmit={postData}>
          {/* Render image selection dropdown if images are available */}
          {images.length > 0 ? (
            <div>
              <select
                onChange={handleImageSelect}
                value={selectedImage}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option value=""> عکس مورد نظر خود را انتخاب کنید</option>
                {images.map((image, index) => (
                  <optgroup key={index} >
                    <option value={image.url} style={{
                      backgroundImage: `url(${image.url})`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'left center',
                      paddingLeft: '45px',
                      height: '40px',
                      lineHeight: '40px'
                    }}>
                      {image.name || `Image ${index + 1}`}
                    </option>
                  </optgroup>
                ))}
              </select>

              {/* Display selected image preview */}
              {selectedImage && (
                <div style={{ marginTop: '20px' }}>
                  <h3 className="text-end">:عکس انتخابی </h3>
                  <img src={selectedImage} alt="Selected image" className="mx-auto mt-7 rounded-lg shadow-lg" style={{ height: '350px' }} />
                </div>
              )}
            </div>
          ) : (
            <p className="text-center">!شما عکسی را آپلود نکرده اید</p>
          )}
          {/* Input for link */}
          <input type="text" placeholder=" لینک" className="inputLink w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 my-7" />

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-all"
          >
            ثبت
          </button>
          {/* Display status message */}
          {postStatus !== 'idle' && (
            <div className={`mt-4 p-2 rounded-lg ${postStatus === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {statusMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Trending
