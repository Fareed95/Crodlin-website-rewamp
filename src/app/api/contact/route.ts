import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = ContactSchema.parse(body)
    const inquiry = await prisma.inquiry.create({
      data: {
        name: data.name,
        email: data.email,
        projectType: data.projectType,
        budget: data.budget,
        message: data.message,
      },
    })
    return NextResponse.json({ success: true, id: inquiry.id }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 })
    }
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
