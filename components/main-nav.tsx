"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const menuItems = [
  { href: "/", label: "二维码生成" },
  { href: "/solutions", label: "解决方案" },
  { href: "/pricing", label: "定价" },
  { href: "/support", label: "客户支持" },
  { href: "/contact", label: "联系销售" },
]

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">QR Code Pro</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 flex-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-foreground" : "text-foreground/60",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-2">
            <Link href="/login" passHref>
              <Button variant="ghost" className="hidden md:inline-flex">
                登录
              </Button>
            </Link>
            <Link href="/register" passHref>
              <Button className="hidden md:inline-flex bg-green-500 hover:bg-green-600 text-white">注册</Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">打开菜单</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        pathname === item.href ? "text-foreground" : "text-foreground/60",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/login" passHref>
                    <Button variant="ghost" className="justify-start w-full" onClick={() => setIsOpen(false)}>
                      登录
                    </Button>
                  </Link>
                  <Link href="/register" passHref>
                    <Button
                      className="justify-start w-full bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      注册
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}

