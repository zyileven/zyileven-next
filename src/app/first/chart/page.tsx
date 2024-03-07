"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function ChatPage() {
    return (
        <div className="border-[1px] border-[#308] m-[10px]">
            ChatPage

            <Button onClick={() => console.log("123")}> Click </Button>

        </div>
    );
}
