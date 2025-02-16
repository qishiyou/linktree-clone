"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { FaGoogle, FaFacebook } from "react-icons/fa"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 处理登录逻辑
    console.log("Login with:", email, password)
  }

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>登录</CardTitle>
          <CardDescription>登录您的QR Code Pro账户</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">电子邮件</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">密码</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
                登录
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p>或使用以下方式登录</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Button variant="outline" className="w-full">
                <FaGoogle className="mr-2" /> Google
              </Button>
              <Button variant="outline" className="w-full">
                <FaFacebook className="mr-2" /> Facebook
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-between">
          <Link href="/auth/forgot-password" className="text-sm text-gray-500 hover:underline">
            忘记密码？
          </Link>
          <p>
            没有账户？{" "}
            <Link href="/auth/register" className="text-green-500 hover:underline">
              注册
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

