import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Youtube = () => {
  const [link, setLink] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/")
      .then((res) => {
        console.log(res.data.data[0])
        setLink(res.data.data[0].tasks[0].assets[0].asset_content)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <iframe width="100%" height="291px" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default Youtube
