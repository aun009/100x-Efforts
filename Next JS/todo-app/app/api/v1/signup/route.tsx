import { NextRequest, NextResponse } from "next/server";

export function POST(req : NextRequest) {

    const data = req.json

    return NextResponse.json({
        message : "you are signed up"
    })

}