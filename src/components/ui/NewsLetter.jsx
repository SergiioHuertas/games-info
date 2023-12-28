import {Input} from "@/components/ui/Input";
import {Button} from "@/components/ui/Button";
import Link from "next/link";

export default function NewsLetter() {
    return (
        <section className="mt-12 bg-black-50 p-6 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <form className="flex space-x-2">
                <Input className="max-w-lg flex-1 text-black" placeholder="Enter your email" type="email"/>
                <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-sm text-gray-500 mt-2">
                Sign up to get the latest game news.
                <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                </Link>
            </p>
        </section>
    )
}