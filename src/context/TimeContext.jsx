import React, { createContext, useState } from 'react'

// Creating the context for Time
export const TimeContext = createContext(null)

// TimeContextProvider component
export const TimeContextProvider = ({ children, submitUrl }) => {
  // Separate state variables for each form field
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // Function to update state for each field
  const handleUpdateField = (field, value) => {
    switch (field) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'phone':
        setPhone(value)
        break
      default:
        break
    }
  }

  // Function to reset all fields to initial state
  const handleResetForm = () => {
    setName('')
    setEmail('')
    setPhone('')
  }

  // Function to handle form submission
  const handleSubmitForm = async (event) => {
    event.preventDefault()

    try {
      const formState = { name, email, phone }
      const response = await fetch(submitUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      console.log('Form submitted successfully:', data)
      resetForm() // Reset form after successful submission
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  // Providing the form state and functions through context
  return (
    <TimeContext.Provider
      value={{
        formState: { name, email, phone },
        onUpdateField: handleUpdateField,
        onResetForm: handleResetForm,
        onSubmitForm: handleSubmitForm,
      }}
    >
      {children}
    </TimeContext.Provider>
  )
}
