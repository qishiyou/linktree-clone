import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactSalesPage() {
  return (
    <main className="flex-1">
      <section className="bg-green-50 py-12 md:py-24">
        <div className="container">
          <h1 className="text-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">联系销售团队</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-center text-gray-500 md:text-xl">
            我们的销售专家随时为您提供个性化的二维码解决方案
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>联系表单</CardTitle>
                <CardDescription>请填写以下信息，我们会尽快与您联系</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">姓名</Label>
                    <Input id="name" placeholder="请输入您的姓名" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">电子邮箱</Label>
                    <Input id="email" type="email" placeholder="请输入您的电子邮箱" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company">公司名称</Label>
                    <Input id="company" placeholder="请输入您的公司名称" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="industry">行业</Label>
                    <Select>
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="请选择您的行业" />
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
                  <div className="grid gap-2">
                    <Label htmlFor="message">留言</Label>
                    <Textarea id="message" placeholder="请告诉我们您的需求" />
                  </div>
                  <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
                    提交
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>为什么选择我们？</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>专业的二维码解决方案</li>
                    <li>个性化定制服务</li>
                    <li>强大的数据分析能力</li>
                    <li>安全可靠的技术支持</li>
                    <li>灵活的定价方案</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>联系方式</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>电话：+86 400-123-4567</p>
                  <p>邮箱：sales@qrcodepro.com</p>
                  <p>地址：上海市浦东新区张江高科技园区</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

