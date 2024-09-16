'use client'
import { useEffect, useState } from "react"
import axios from 'axios'
import Image from "next/image"

// Define interfaces for type safety
interface Image {
  url: string;
  name: string;
  description?: string;
}
interface Category {
  _id: string;
  name: string;
}

const Products = () => {
  // State declarations for various components of the form
  const [images, setImages] = useState<Image[]>([])
  const [selectedImage, setSelectedImage] = useState('')
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [postStatus, setPostStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const formData = new FormData()

  // useEffect hook to fetch images and categories when component mounts
  useEffect(() => {
    // Async function to fetch images from the API
    const fetchImages = async () => {
      try {
        const response = await axios.get('api/uploadedFiles')
        const filterdImages = response.data.filter((image: any) => image.category === 'products')
        setImages(filterdImages)
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    // Async function to fetch categories from the API
    const fetchCategories = async () => {
      try {
        const response = await axios.get('api/categories')
        setCategories(response.data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
    fetchImages()
  }, [])

  // Event handlers for select inputs
  const handleImageSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedImage(event.target.value)
  }
  const handleCategorySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value)
  }

  // Function to handle form submission
  const postData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setPostStatus('idle');
    setStatusMessage('');
    formData.append('image', selectedImage)

    // Get form input values
    const nameInput = event.currentTarget.querySelector('.inputName') as HTMLInputElement;
    const desInput = event.currentTarget.querySelector('.inputDes') as HTMLInputElement;
    const priceInput = event.currentTarget.querySelector('.inputPrice') as HTMLInputElement;
    const brandInput = event.currentTarget.querySelector('.inputBrand') as HTMLInputElement;
    const colorInput = event.currentTarget.querySelector('.inputColor') as HTMLInputElement;
    const categoryInput = event.currentTarget.querySelector('.inputCategory') as HTMLInputElement;

    // Append form data if all fields are filled
    if (priceInput.value && nameInput.value && desInput.value && desInput.value && brandInput.value && colorInput.value && categoryInput.value) {
      formData.append('name', nameInput.value);
      formData.append('price', priceInput.value);
      formData.append('brand', brandInput.value);
      formData.append('color', colorInput.value);
      formData.append('category', categoryInput.value);
      formData.append('description', desInput.value);
    } 

    // Send POST request to add product
    try {
      const response = await axios.post('api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log('Product added successfully:', response.data)
      setPostStatus('success');
      setStatusMessage('Product added successfully!');
    } catch (error) {
      console.error('Error uploading product:', error)
      setPostStatus('error');
      setStatusMessage('Failed to add product. Please try again.');
    }
  }

  // Render the component
  
  return (
    <div className="flex h-auto items-center justify-center  ">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border-t">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">محصولات</h1>
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
          <input type="text" placeholder="توضیحات" className="inputDes w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-7" />
          <input type="text" placeholder=" قیمت" className="inputPrice w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-7" />
          <input type="text" placeholder=" برند" className="inputBrand w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-7" />
          <input type="text" placeholder=" رنگ" className="inputColor w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-7" />
          <select
            onChange={handleCategorySelect}
            value={selectedCategory}
            className="inputCategory w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-7"
          >
            <option value="">دسته بندی را انتخاب کنید</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>           <button
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
export default Products