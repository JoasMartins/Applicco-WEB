'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHandshake } from '@fortawesome/free-solid-svg-icons';

function ButtonContratar() {
  const handleDownload = () => {
    const apkFileName = appData.apkname;
    const apkFilePath = process.env.PUBLIC_URL + '/' + apkFileName;

    const downloadLink = document.createElement('a');
    downloadLink.href = apkFilePath;
    downloadLink.download = apkFileName;
    downloadLink.click();
  };

  return (
    <button onClick={handleDownload} disabled={true} className='areaActionButton'>
      <FontAwesomeIcon icon={faDownload} className='iconButton' />
      <div className='barraDivisoria' />
      <p>Baixar</p>
    </button>
  )
}

export default ButtonContratar