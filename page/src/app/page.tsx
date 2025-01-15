'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import firstImage from '../assets/Images/4.jpeg'
import secondImage from '../assets/Images/2.jpeg'
import thirdImage from '../assets/Images/6.jpeg'

export default function DateInvitationAlbum() {
  const [mounted, setMounted] = useState(false)

  const url = process.env.NEXT_PUBLIC_WAME
  console.log(url)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-pink-200 flex flex-col items-center justify-center align-middle p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full text-center"
      >
        <h1 className="text-4xl font-bold text-rose-600 mb-6">Nuestra Historia Continua...</h1>
        <p className="text-xl text-gray-700 mb-8">Una invitacion especia para mi nomvia que cumple años</p>
        
        <div className="flex flex-col justify-center align-middle mx-auto items-center space-y-6 mb-12 lg:flex-row lg:space-x-12 lg:space-y-0">
          <PhotoFrame delay={0.2} rotation={-5} src={firstImage.src} alt="A beautyfull photo" caption="A beautyfull photo" />
          <PhotoFrame delay={0.4} rotation={5} src={secondImage.src} alt="A beautyfull photo" caption="A beautyfull photo" />
          <PhotoFrame delay={0.6} rotation={-3} src={thirdImage.src} alt="Ultimo cumpleaños" caption="Ultimo cumpleaños" />
        </div>
        
        <div className="space-y-4 text-gray-700">
          <p className="text-2xl font-semibold text-rose-500">Me quieres acompañar a una cita especial?</p>
          <p><span className="font-semibold">Cuando:</span> Sabado 25 (No se a que hora)</p>
          <p><span className="font-semibold">Donde:</span> Es una sorpresa</p>
          <p className="italic">"Creemos otro recuerdo juntos..."</p>
        </div>
        
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-3/5 mt-8 bg-rose-500 text-white font-bold py-2 px-6 rounded-full hover:bg-rose-600 hover:cursor-pointer transition duration-300 flex items-center justify-center mx-auto"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Heart className="mr-2" size={18} />
          Di que Siii!
        </motion.a>
      </motion.div>
    </div>
  )
}

function PhotoFrame({ src, alt, delay, rotation, caption }: { src: string, alt: string, delay: number, rotation: number, caption: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: rotation }}
      animate={{ opacity: 1, rotate: rotation }}
      transition={{ delay, duration: 0.8, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.05, rotate: rotation + 5 }}
      className="relative w-48 h-68 bg-white p-3 shadow-lg rounded-sm transform"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-pink-200 rounded-sm" />
      <div className="relative w-full h-52 overflow-hidden rounded-sm">
        <Image src={src || "../assets/Images/1.svg"} alt={alt} layout="fill" objectFit="cover" />
      </div>
      <p className="mt-2 text-sm text-gray-600 font-medium">{caption}</p>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white rounded-full shadow-inner" />
      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full shadow-inner" />
      <div className="absolute -top-2 -left-2 w-6 h-6 bg-white rounded-full shadow-inner" />
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-inner" />
    </motion.div>
  )
}
