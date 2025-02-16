import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">联系销售</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">联系我们</h2>
          <p className="mb-6">我们的销售团队随时为您提供专业的咨询和支持，帮助您选择最适合的解决方案。</p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">名字</Label>
                <Input id="firstName" placeholder="张" />
              </div>
              <div>
                <Label htmlFor="lastName">姓氏</Label>
                <Input id="lastName" placeholder="三" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">电子邮件</Label>
              <Input id="email" type="email" placeholder="zhangsan@example.com" />
            </div>
            <div>
              <Label htmlFor="phone">电话号码</Label>
              <Input id="phone" type="tel" placeholder="13800138000" />
            </div>
            <div>
              <Label htmlFor="company">公司名称</Label>
              <Input id="company" placeholder="ABC科技有限公司" />
            </div>
            <div>
              <Label htmlFor="jobTitle">职位</Label>
              <Input id="jobTitle" placeholder="市场经理" />
            </div>
            <div>
              <Label htmlFor="industry">行业</Label>
              <Select>
                <SelectTrigger id="industry">
                  <SelectValue placeholder="选择您的行业" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="retail">零售业</SelectItem>
                  <SelectItem value="food">餐饮业</SelectItem>
                  <SelectItem value="education">教育行业</SelectItem>
                  <SelectItem value="tourism">旅游业</SelectItem>
                  <SelectItem value="healthcare">医疗保健</SelectItem>
                  <SelectItem value="realestate">房地产</SelectItem>
                  <SelectItem value="other">其他</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message">您的需求</Label>
              <Textarea id="message" placeholder="请简要描述您的需求，我们会尽快与您联系" />
            </div>
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
              提交
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">联系方式</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2" /> 电子邮件
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>sales@qrcodepro.com</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2" /> 电话
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>+86 400-123-4567</p>
                <p className="text-sm text-gray-500 mt-2">周一至周五 9:00-18:00</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2" /> 地址
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>上海市浦东新区张江高科技园区科苑路88号</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

