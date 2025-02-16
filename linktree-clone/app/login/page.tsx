"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { FaGoogle, FaFacebook } from "react-icons/fa"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // 处理登录逻辑
    console.log("Login with:", email, password)
  }

  return (
    <main className="flex-1 flex items-center justify-center bg-green-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">登录 QR Code Pro</CardTitle>
          <CardDescription className="text-center">欢迎回来，请登录您的账户</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email">电子邮箱</Label>
              <Input
                id="email"
                type="email"
                placeholder="请输入您的电子邮箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">密码</Label>
              <Input
                id="password"
                type="password"
                placeholder="请输入您的密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
              登录
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link href="/forgot-password" className="text-sm text-green-600 hover:underline">
              忘记密码？
            </Link>
          </div>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">或者使用以下方式登录</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <FaGoogle className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <FaFacebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              还没有账户？{" "}
              <Link href="/register" className="text-green-600 hover:underline">
                立即注册
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

