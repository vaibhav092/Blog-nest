import React from 'react'

function Button({children,...props}) {
    return (
    <button className='inline-block bg-red-500 hover:bg-blue-600 rounded-full duration-200 px-6 py-4'{...props}>
        {children}
    </button>
    )
}

export default Button