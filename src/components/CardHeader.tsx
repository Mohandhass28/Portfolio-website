import React from 'react'
import StartIcon from '@/assets/icons/star.svg'

const CardHeader = ({
  title,
  description,
  className
}: {
  title: string
  description: string
  className?: string
}) => {
  return (
    <div className='flex flex-col'>
      <div className='inline-flex items-center gap-2'>
        <StartIcon className='size-9 text-emerald-300' />
        <h3 className='font-serif text-3xl '>{title}</h3>
      </div>
      <p className='text-sm text-white/60 mt-2'>{description}</p>
    </div>
  )
}

export default CardHeader
