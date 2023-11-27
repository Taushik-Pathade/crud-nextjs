import Connectmongodb from "@/database/Connectmongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    await Connectmongodb()
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Updates Succesfully" }, { status: 200 });
}

export async function GET(request, { params }) {
    await Connectmongodb()
    const { id } = params;
    const topic = await Topic.findOne({ _id: id })
    return NextResponse.json({ topic }, { status: 200 });
}
