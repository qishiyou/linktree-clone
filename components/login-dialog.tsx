"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface LoginDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  feature: string
}

export function LoginDialog({ open, onOpenChange, feature }: LoginDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>需要登录</DialogTitle>
          <DialogDescription>{feature}功能需要登录后才能使用。请登录或注册以继续使用。</DialogDescription>
        </DialogHeader>
        <div className="flex justify-end space-x-4 mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            取消
          </Button>
          <Link href="/login" passHref>
            <Button>登录</Button>
          </Link>
          <Link href="/register" passHref>
            <Button className="bg-green-500 hover:bg-green-600">注册</Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}

