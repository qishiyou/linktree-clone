"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  QrCode,
  Smartphone,
  Link,
  BarChart3,
  Shield,
  Zap,
  ShoppingBag,
  Coffee,
  GraduationCap,
  Plane,
  Stethoscope,
  CreditCard,
  Share2,
} from "lucide-react"

export default function Home() {
  const [qrCodeData, setQrCodeData] = useState("")

  const generateQRCode = (data: string) => {
    console.log("Generating QR code for:", data)
    // Placeholder for QR code generation logic
  }

  const features = [
    { icon: <QrCode className="h-8 w-8" />, title: "多种二维码类型", description: "支持URL、文本、图片等多种类型" },
    { icon: <Smartphone className="h-8 w-8" />, title: "移动端友好", description: "完美适配各种移动设备" },
    { icon: <Link className="h-8 w-8" />, title: "短链接服务", description: "自动生成短链接，方便分享" },
    { icon: <BarChart3 className="h-8 w-8" />, title: "数据分析", description: "详细的扫描统计和分析报告" },
    { icon: <Shield className="h-8 w-8" />, title: "安全可靠", description: "内置多重安全保护机制" },
    { icon: <Zap className="h-8 w-8" />, title: "快速生成", description: "秒级生成，即时可用" },
  ]

  const industries = [
    { icon: <ShoppingBag className="h-8 w-8" />, name: "零售业", description: "产品信息、优惠券、会员卡" },
    { icon: <Coffee className="h-8 w-8" />, name: "餐饮业", description: "菜单、订位、外卖链接" },
    { icon: <GraduationCap className="h-8 w-8" />, name: "教育行业", description: "课程资料、校园导航、活动报名" },
    { icon: <Plane className="h-8 w-8" />, name: "旅游业", description: "景点介绍、电子票据、导游信息" },
    { icon: <Stethoscope className="h-8 w-8" />, name: "医疗保健", description: "预约挂号、病历查询、健康资讯" },
    { icon: <Home className="h-8 w-8" />, name: "房地产", description: "房源信息、看房预约、虚拟参观" },
    { icon: <CreditCard className="h-8 w-8" />, name: "数字名片", description: "个人信息、社交媒体、专业技能展示" },
    { icon: <Share2 className="h-8 w-8" />, name: "聚合链接", description: "社交媒体汇总、作品集展示、多平台引流" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">专业的二维码生成平台</h1>
        <p className="text-xl text-gray-600 mb-8">一站式解决您的二维码需求，支持多种类型，简单易用</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Tabs defaultValue="url" className="w-full">
              <TabsList className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <TabsTrigger value="url">网址</TabsTrigger>
                <TabsTrigger value="text">文本</TabsTrigger>
                <TabsTrigger value="image">图像</TabsTrigger>
                <TabsTrigger value="pdf">PDF</TabsTrigger>
                <TabsTrigger value="app">APP下载</TabsTrigger>
                <TabsTrigger value="map">地图</TabsTrigger>
                <TabsTrigger value="wifi">WiFi</TabsTrigger>
                <TabsTrigger value="vcard">数字名片</TabsTrigger>
                <TabsTrigger value="social">聚合链接</TabsTrigger>
              </TabsList>
              <TabsContent value="url">
                <Card>
                  <CardHeader>
                    <CardTitle>生成网址二维码</CardTitle>
                    <CardDescription>输入您想要转换成二维码的网址</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="url">网址</Label>
                        <Input
                          id="url"
                          placeholder="https://example.com"
                          value={qrCodeData}
                          onChange={(e) => setQrCodeData(e.target.value)}
                        />
                      </div>
                      <Button onClick={() => generateQRCode(qrCodeData)}>生成二维码</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="text">
                <Card>
                  <CardHeader>
                    <CardTitle>生成文本二维码</CardTitle>
                    <CardDescription>输入您想要转换成二维码的文本内容</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="text">文本内容</Label>
                        <Textarea
                          id="text"
                          placeholder="输入您的文本内容"
                          value={qrCodeData}
                          onChange={(e) => setQrCodeData(e.target.value)}
                        />
                      </div>
                      <Button onClick={() => generateQRCode(qrCodeData)}>生成二维码</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="image">
                <Card>
                  <CardHeader>
                    <CardTitle>生成图像二维码</CardTitle>
                    <CardDescription>上传图像或输入图像URL</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="image">图像URL</Label>
                        <Input
                          id="image"
                          type="url"
                          placeholder="https://example.com/image.jpg"
                          value={qrCodeData}
                          onChange={(e) => setQrCodeData(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="file">或上传图像</Label>
                        <Input
                          id="file"
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                              const reader = new FileReader()
                              reader.onload = (event) => {
                                setQrCodeData(event.target?.result as string)
                              }
                              reader.readAsDataURL(file)
                            }
                          }}
                        />
                      </div>
                      <Button onClick={() => generateQRCode(qrCodeData)}>生成二维码</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              {/* 其他类型的TabsContent将类似，但有不同的输入字段 */}
            </Tabs>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold">预览</h3>
              <p className="text-sm text-gray-500">扫描下方二维码测试效果</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <img src="/placeholder.svg" alt="QR Code Preview" className="w-48 h-48" />
            </div>
            <div className="flex space-x-4 mt-4">
              <Button variant="outline">复制短链接</Button>
              <Button variant="outline">下载二维码</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">为什么选择我们？</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">一个平台：多种二维码解决方案</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  {industry.icon}
                </div>
                <CardTitle>{industry.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">客户评价</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "张三",
              company: "ABC科技",
              comment: "QR Code Pro极大地提高了我们的营销效率，客户参与度显著提升。",
            },
            {
              name: "李四",
              company: "XYZ餐饮",
              comment: "使用他们的动态二维码后，我们的菜单更新变得如此简单，顾客体验大大改善。",
            },
            {
              name: "王五",
              company: "123教育",
              comment: "安全可靠的二维码解决方案，让我们能够放心地在校园内使用。强烈推荐！",
            },
          ].map((review, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{review.name}</CardTitle>
                <CardDescription>{review.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>"{review.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">技术与安全</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-500" />
              </div>
              <CardTitle>高级加密技术</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>使用AES-256位加密</li>
                <li>SSL/TLS安全传输协议</li>
                <li>定期安全审计和渗透测试</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-green-500" />
              </div>
              <CardTitle>实时监控和分析</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>24/7实时监控系统</li>
                <li>异常行为检测和预警</li>
                <li>详细的使用统计和分析报告</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-500" />
              </div>
              <CardTitle>持续创新</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>定期更新和功能优化</li>
                <li>符合GDPR等国际数据保护标准</li>
                <li>专业技术团队支持</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

