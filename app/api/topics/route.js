import Connectmongodb from "@/database/Connectmongodb";
import Topic from "@/models/topic";

import { NextResponse } from "next/server";

export async function POST(request) {
    await Connectmongodb()
    const { title, description } = await request.json();
    await Topic.create({ title, description })
    return NextResponse.json({ message: "Created successfully" }, { status: 201 })
}




export async function GET() {
    await Connectmongodb()
    const topics = await Topic.find()
    return NextResponse.json({ topics })

}


export async function DELETE(request) {
    await Connectmongodb()
    const id = request.nextUrl.searchParams.get('id')
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({ message: "Deleted successfully" }, { status: 200 })

}