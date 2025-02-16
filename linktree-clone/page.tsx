"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function Page() {
  const [username, setUsername] = React.useState("")

  return (
    <div className="min-h-screen bg-[#1a4720]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between w-full px-4 py-3 bg-white/95 backdrop-blur-sm md:px-6">
        <div className="flex items-center gap-8">
          <a href="#" className="text-xl font-bold">
            Linktree*
          </a>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Templates</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                          href="#"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">Featured Templates</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautiful pre-designed templates to get you started.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Marketplace</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                          href="#"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">Explore Marketplace</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Discover tools and integrations to grow your audience.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  )}
                  href="#"
                >
                  Discover
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  )}
                  href="#"
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  )}
                  href="#"
                >
                  Learn
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Search" className="pl-9 w-[200px]" />
          </div>
          <Button variant="ghost" className="hidden md:inline-flex">
            Log in
          </Button>
          <Button>Sign up free</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container relative grid items-center grid-cols-1 gap-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold tracking-tight text-[#c3f53b] md:text-6xl lg:text-7xl">
            Everything you are. In one, simple link in bio.
          </h1>
          <p className="text-lg text-white/90">
            Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create,
            curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">linktree/</span>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-20"
                placeholder="yourname"
              />
            </div>
            <Button size="lg" className="bg-[#e9c2ec] text-black hover:bg-[#e9c2ec]/90">
              Claim your Linktree
            </Button>
          </div>
        </div>

        {/* Phone Preview */}
        <div className="relative hidden md:block">
          <div className="absolute w-full h-full animate-float">
            <div className="relative w-[300px] h-[600px] mx-auto rounded-[40px] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-[#c8e6ff] to-[#e9c2ec]" />
              <div className="relative flex flex-col items-center gap-4 p-8">
                <div className="w-20 h-20 overflow-hidden rounded-full bg-gradient-to-br from-pink-200 to-purple-200">
                  <img src="/placeholder.svg?height=80&width=80" alt="Profile" className="object-cover w-full h-full" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Ariel J</h2>
                <p className="text-sm text-gray-600">Young Hearts is out now</p>
                <div className="flex flex-col w-full gap-3">
                  <Button className="w-full bg-white/80 text-gray-800 hover:bg-white">Latest Single</Button>
                  <Button className="w-full bg-white/80 text-gray-800 hover:bg-white">Bubble Gum Music Video</Button>
                  <Button className="w-full bg-white/80 text-gray-800 hover:bg-white">Listen on Spotify</Button>
                </div>
                <div className="flex gap-4 mt-4">
                  {["spotify", "youtube", "instagram"].map((platform) => (
                    <div key={platform} className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center">
                      <div className="w-5 h-5 bg-gray-400 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

