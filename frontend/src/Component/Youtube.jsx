import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Youtube = ({ link }) => {
  return (
    <div>
      <iframe width="100%" height="291px" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default Youtube
