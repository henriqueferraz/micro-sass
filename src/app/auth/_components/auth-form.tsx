import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function AuthForm() {
    return (
        <div className="mx-auto max-w-md px-4 py-12 sm:px-6 lg:px-8">
            <div className="space-y-6 text-center">
                <h1 className="text-3xl font-bold tracking-tight">Sign in with a magic link</h1>
                <p className="text-muted-foreground">Enter your email address and  send you a magic link to sign in.</p>
            </div>
            <form className="mt-8 space-y-6">
                <div>
                    <Label htmlFor="email" className="sr-only">
                        Email address
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Email address"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    />
                </div>
                <div>
                    <Button type="submit" className="w-full">
                        Send magic link
                    </Button>
                </div>
            </form>
        </div>
    )
}