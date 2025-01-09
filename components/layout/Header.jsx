import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-700 shadow-md">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        <a className="flex items-center justify-center" href="#">
          <span className="font-extrabold text-xl">cancelmysubs.com</span>
        </a>
        <Button size="sm" className="hidden sm:inline-flex items-center justify-center">
          Connect Gmail
          <Mail className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  )
} 