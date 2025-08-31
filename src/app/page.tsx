import React from 'react'

const Page = () => {
  return (
    <>
      <div>my first vercel try</div>
      <p>and this is updated version</p>

      <a
        href="https://drive.google.com/uc?export=download&id=1tABIceAq4dnmOwF_wtH1kFL0_lrjDs4e"
        download="myfile.pdf"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-block mt-4"
      >
        Download PDF
      </a>
    </>
  )
}

export default Page
