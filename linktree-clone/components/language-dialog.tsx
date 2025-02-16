"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface LanguageDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LanguageDialog({ open, onOpenChange }: LanguageDialogProps) {
  const handleLanguageSelect = (lang: string) => {
    // Here you would typically update your i18n context/store
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Your Language</DialogTitle>
          <DialogDescription>Choose your preferred language / 选择您的语言</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            onClick={() => handleLanguageSelect("en")}
            className="flex items-center justify-center gap-2"
          >
            🇺🇸 English
          </Button>
          <Button
            variant="outline"
            onClick={() => handleLanguageSelect("zh")}
            className="flex items-center justify-center gap-2"
          >
            🇨🇳 中文
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

