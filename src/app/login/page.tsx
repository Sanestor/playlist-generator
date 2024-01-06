import Image from "next/image";
import AuthButton from "@/components/AuthButton";

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-20">
            <Image
                src="/images/auth/spotify_logo.png"
                alt="spotify logo"
                width={320}
                height={96}
            />
            <AuthButton text="Login" authType="signin" classes="bg-green-700" />
        </div>
    );
}
