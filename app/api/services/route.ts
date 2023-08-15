import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
import PocketBase from 'pocketbase'


const pb = new PocketBase('http://127.0.0.1:8090');
pb.autoCancellation(false);
export const revalidate = 0


export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const resultList = await pb.collection('services').getFullList({
    sort: 'key',
  });

  return NextResponse.json(resultList)
}
