import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
import PocketBase from 'pocketbase'


const pb = new PocketBase('http://127.0.0.1:8090');
pb.autoCancellation(false);

export async function GET(req: NextApiRequest, res: NextApiResponse) {


  // console.log("IMAGE HEADERS", req.headers)

  const url = req.headers[0]
  const url2 = req.headers[1]

  const image = await fetch(`${url}`)
  const image2 = await fetch(`${url2}`)
  return NextResponse.json(image)
}