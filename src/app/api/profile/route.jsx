import { put } from "@vercel/blob"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import { options } from "../auth/[...nextauth]/options"
import db from "../../../../prisma/db"
export async function POST(request) {
  const session = await getServerSession(options)
  const filename = session.user.name
  // ⚠️ The below code is for App Router Route Handlers only
  const blob = await put(filename, request.body, {
    access: "public",
  })
  await db.user.update({
    where: {
      email: session.user.email,
    },
    data: {
      avatar: blob.url,
    },
  })
  // Here's the code for Pages API Routes:
  // const blob = await put(filename, request, {
  //   access: 'public',
  // });

  return NextResponse.json(blob)
}

// The next lines are required for Pages API Routes only
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
