import React from 'react'
export default function Overlay() {
    return (
        <div className='screen-overlay' style={{
            backgroundColor: 'black',
            width: '100%',
            height: '36rem',
            position: 'absolute',
            opacity: '15%',
            zIndex: '3',
            top: '0',
            left:'0'
          }}>
          </div>
    )
}