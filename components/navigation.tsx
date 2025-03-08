"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() { 
    const [num, setNum] = useState(0);
    const path = usePathname();

    return (
        <nav>
            <ul>
                <li><Link href={"/"}>home {path === "/" ? "⬅️" : ""}</Link></li>
                <li>
                <Link href={"/info"}>info {path === "/info" ? "⬅️" : ""}</Link>
                </li>
                <button onClick={() => setNum((num) => num + 1)}>{num}</button>

            </ul>
        </nav>
    )
}