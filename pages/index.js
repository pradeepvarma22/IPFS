import { useState } from 'react';
import { Web3Storage, getFilesFromPath } from 'web3.storage'


export default function Home() {

  const [fileUrl, setFileUrl] = useState("");

  const handleUpload= async (e)=>{
    const token = process.env.NEXT_PUBLIC_WEB3_STORAGE_TOKEN_KEY

    e.preventDefault();
    const data = e.target.files[0];
    
    const storage = new Web3Storage({ token });
    const files = []
    files.push(data);

    const cid = await storage.put(files)

    setFileUrl(`ipfs://${cid}/${data.name}`);
    // save file names,cid in json to get unique link 
    
  }


  return (
  <div>
      Hello
      <br/>
      <input type="file" onChange={handleUpload}/>
      <br/>
      {fileUrl && <p>{fileUrl}</p>}

  </div>
  )
}
