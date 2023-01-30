import React from 'react'
import Image from 'next/image'

function Loadder() {
  return (
    <Image src='/loading.gif' height={50} width={50} style={{marginTop:"20px"}}  alt="loadder"></Image>
  )
}

export default Loadder