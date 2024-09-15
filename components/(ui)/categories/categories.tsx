'use client'
import BlogCard from "@/components/(ui)/BlogCard"
import FileUploadForm from "@/components/(ui)/(admin)/(forms)/FileUploadForm"
import { useEffect, useState } from "react"
import axios from 'axios'
import Image from "next/image"

interface Image {
  url: string;
  name: string;
  description?: string;
}
const Categories = () => {
  const [images, setImages] = useState<Image[]>([])
  const [selectedImage, setSelectedImage] = useState('')
  const formData = new FormData()
  const [postStatus, setPostStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('api/uploadedFiles')
        const filterdImages = response.data.filter((image: any) => image.category === 'category')
        setImages(filterdImages)

      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    fetchImages()
  }, [])

  const handleImageSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedImage(event.target.value)

  }
  const postData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPostStatus('idle');
    setStatusMessage('');
    formData.append('image', selectedImage)
    const nameInput = event.currentTarget.querySelector('.inputName') as HTMLInputElement;
    if (nameInput && nameInput.value) {
      formData.append('name', nameInput.value);
    } try {
      const response = await axios.post('api/categories', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Image uploaded successfully:', response.data);
      setPostStatus('success');
      setStatusMessage('Category added successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      setPostStatus('error');
      setStatusMessage('Failed to add category. Please try again.');
    }
  };
  return (
    <div className="flex h-auto items-center justify-center ">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border-t">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">دسته بندی ها</h1>
        <form onSubmit={postData}>
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

              {selectedImage && (
                <div style={{ marginTop: '20px' }}>
                  <h3 className="text-end">:عکس انتخابی </h3>
                  <img src={selectedImage} alt="Selected image" className="mx-auto mt-7 rounded-lg shadow-lg" style={{ maxHeight: '350px', height: 'auto' }} />
                </div>
              )}
            </div>
          ) : (
            <p className="text-center">!شما عکسی را آپلود نکرده اید</p>
          )}
          <input type="text" placeholder="عنوان عکس" className="inputName w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 my-7" />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-all"
          >
            ثبت
          </button>
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

export default Categories