import React from 'react'
import { useRouter } from 'next/router'
import Header from "components/Header";


function Slug() {
    const router=useRouter();
    const {slug}=router.query;
    // console.log(router, router.query, slug)
  return (
    <>
    <Header></Header>
    <div style={{marginTop:"10vh"}}>{slug}</div>
    </>
  )
}

export default Slug