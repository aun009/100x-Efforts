import { useState } from "react";
import { atom } from "recoil";

export const counterAtom = atom({
    default  : 0,
    key : "counter"
})

