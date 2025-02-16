"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { LoginDialog } from "@/components/login-dialog"
import {
  QrCode,
  Smartphone,
  Link,
  BarChart3,
  Shield,
  Zap,
  FileText,
  Image,
  FileType,
  Map,
  CreditCard,
  Share2,
  Lock,
  ShieldCheck,
  FileCheck,
  BarChart,
} from "lucide-react"

const PREMIUM_FEATURES = ["image", "pdf", "app", "map", "vcard", "social"]
const FEATURE_NAMES: Record<string, string> = {
  image: "图像二维码",
  pdf: "PDF二维码",
  app: "APP下载二维码",
  map: "地图二维码",
  vcard: "数字名片",
  social: "聚合链接",
}

export default function Home() {
  const [qrCodeData, setQrCodeData] = useState("")
  const [qrCodeImage, setQrCodeImage] = useState("")
  const [qrCodeSize, setQrCodeSize] = useState(200)
  const [qrCodeColor, setQrCodeColor] = useState("#000000")
  const [qrCodeType, setQrCodeType] = useState("url")
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState("")

  const handleTabChange = (value: string) => {
    if (PREMIUM_FEATURES.includes(value)) {
      setSelectedFeature(FEATURE_NAMES[value])
      setShowLoginDialog(true)
      return
    }
    setQrCodeType(value)
  }

  const generateQRCode = () => {
    let data = qrCodeData
    if (qrCodeType === "wifi") {
      data = `WIFI:T:WPA;S:${wifiSSID};P:${wifiPassword};;`
    } else if (qrCodeType === "vcard") {
      data = `BEGIN:VCARD\nVERSION:3.0\nN:${vcardLastName};${vcardFirstName}\nTEL:${vcardPhone}\nEMAIL:${vcardEmail}\nEND:VCARD`
    }
    setQrCodeImage(
      `https://api.qrserver.com/v1/create-qr-code/?size=${qrCodeSize}x${qrCodeSize}&data=${encodeURIComponent(data)}&color=${qrCodeColor.substring(1)}`,
    )
  }

  const [wifiSSID, setWifiSSID] = useState("")
  const [wifiPassword, setWifiPassword] = useState("")
  const [vcardFirstName, setVcardFirstName] = useState("")
  const [vcardLastName, setVcardLastName] = useState("")
  const [vcardPhone, setVcardPhone] = useState("")
  const [vcardEmail, setVcardEmail] = useState("")

  const features = [
    { icon: <QrCode className="h-8 w-8" />, title: "多种二维码类型", description: "支持URL、文本、图片等多种类型" },
    { icon: <Smartphone className="h-8 w-8" />, title: "移动端友好", description: "完美适配各种移动设备" },
    { icon: <Link className="h-8 w-8" />, title: "短链接服务", description: "自动生成短链接，方便分享" },
    { icon: <BarChart3 className="h-8 w-8" />, title: "数据分析", description: "详细的扫描统计和分析报告" },
    { icon: <Shield className="h-8 w-8" />, title: "安全可靠", description: "内置多重安全保护机制" },
    { icon: <Zap className="h-8 w-8" />, title: "快速生成", description: "秒级生成，即时可用" },
  ]

  const industries = [
    { icon: <QrCode className="h-8 w-8" />, name: "零售业", description: "产品信息、优惠券、会员卡" },
    { icon: <FileText className="h-8 w-8" />, name: "餐饮业", description: "菜单、订位、外卖链接" },
    { icon: <FileType className="h-8 w-8" />, name: "教育行业", description: "课程资料、校园导航、活动报名" },
    { icon: <Map className="h-8 w-8" />, name: "旅游业", description: "景点介绍、电子票据、导游信息" },
    { icon: <Smartphone className="h-8 w-8" />, name: "医疗保健", description: "预约挂号、病历查询、健康资讯" },
    { icon: <Image className="h-8 w-8" />, name: "房地产", description: "房源信息、看房预约、虚拟参观" },
    { icon: <CreditCard className="h-8 w-8" />, name: "数字名片", description: "个人信息、社交媒体、联系方式" },
    { icon: <Share2 className="h-8 w-8" />, name: "聚合链接", description: "社交媒体、作品集、在线商店" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <LoginDialog open={showLoginDialog} onOpenChange={setShowLoginDialog} feature={selectedFeature} />

      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">专业的二维码生成平台</h1>
        <p className="text-xl text-gray-600 mb-8">一站式解决您的二维码需求，支持多种类型，简单易用</p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Tabs defaultValue="url" className="w-full" onValueChange={handleTabChange}>
              <TabsList className="grid grid-cols-3 lg:grid-cols-3 w-full mb-4">
                <TabsTrigger value="url">网址</TabsTrigger>
                <TabsTrigger value="text">文本</TabsTrigger>
                <TabsTrigger value="image">图像</TabsTrigger>
              </TabsList>
              <TabsList className="grid grid-cols-3 lg:grid-cols-3 w-full mb-4">
                <TabsTrigger value="pdf">PDF</TabsTrigger>
                <TabsTrigger value="app">APP下载</TabsTrigger>
                <TabsTrigger value="map">地图</TabsTrigger>
              </TabsList>
              <TabsList className="grid grid-cols-3 lg:grid-cols-3 w-full mb-4">
                <TabsTrigger value="wifi">WiFi</TabsTrigger>
                <TabsTrigger value="vcard">数字名片</TabsTrigger>
                <TabsTrigger value="social">聚合链接</TabsTrigger>
              </TabsList>

              <div className="mt-6">
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
                        <Button onClick={generateQRCode} className="bg-green-500 hover:bg-green-600">
                          生成二维码
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="text">
                  <Card>
                    <CardHeader>
                      <CardTitle>生成文本二维码</CardTitle>
                      <CardDescription>输入您想要转换成二维码的文本</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="text">文本</Label>
                          <Textarea
                            id="text"
                            placeholder="输入您的文本内容"
                            value={qrCodeData}
                            onChange={(e) => setQrCodeData(e.target.value)}
                          />
                        </div>
                        <Button onClick={generateQRCode} className="bg-green-500 hover:bg-green-600">
                          生成二维码
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="wifi">
                  <Card>
                    <CardHeader>
                      <CardTitle>生成WiFi二维码</CardTitle>
                      <CardDescription>输入WiFi信息生成快速连接二维码</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="ssid">WiFi名称 (SSID)</Label>
                          <Input
                            id="ssid"
                            placeholder="输入WiFi名称"
                            value={wifiSSID}
                            onChange={(e) => setWifiSSID(e.target.value)}
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="password">WiFi密码</Label>
                          <Input
                            id="password"
                            type="password"
                            placeholder="输入WiFi密码"
                            value={wifiPassword}
                            onChange={(e) => setWifiPassword(e.target.value)}
                          />
                        </div>
                        <Button onClick={generateQRCode} className="bg-green-500 hover:bg-green-600">
                          生成二维码
                        </Button>
                      </div>
                    </CardContent>
                </TabsContent>
                {/* 其他类型的TabsContent将在这里实现 */}
              </div>
            </Tabs>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold">预览</h3>
              <p className="text-sm text-gray-500">扫描下方二维码测试效果</p>
            </div>

            <div className="flex flex-col items-center space-y-6">
              {qrCodeImage && (
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img
                    src={qrCodeImage || "/placeholder.svg"}
                    alt="Generated QR Code"
                    className="rounded-lg max-w-[200px]"
                  />
                </div>
              )}

              <div className="w-full max-w-xs space-y-4">
                <div>
                  <Label htmlFor="size">大小</Label>
                  <Slider
                    id="size"
                    min={100}
                    max={400}
                    step={10}
                    value={[qrCodeSize]}
                    onValueChange={(value) => setQrCodeSize(value[0])}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="color">颜色</Label>
                  <Input
                    id="color"
                    type="color"
                    value={qrCodeColor}
                    onChange={(e) => setQrCodeColor(e.target.value)}
                    className="h-10 mt-2"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <Button variant="outline">复制短链接</Button>
                <Button variant="outline">下载二维码</Button>
              </div>
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
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Shield className="h-8 w-8 mr-2 text-green-500" />
              先进的技术，坚实的安全保障
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Lock className="h-6 w-6 mr-2 text-green-500" />
                  数据加密
                </h3>
                <p>采用高级加密技术，确保您的数据在传输和存储过程中的安全。</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <ShieldCheck className="h-6 w-6 mr-2 text-green-500" />
                  实时监控
                </h3>
                <p>24/7实时监控系统，快速识别和应对潜在的安全威胁。</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FileCheck className="h-6 w-6 mr-2 text-green-500" />
                  合规性
                </h3>
                <p>符合GDPR、CCPA等国际数据保护标准，保护您的隐私权。</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <BarChart className="h-6 w-6 mr-2 text-green-500" />
                  数据分析
                </h3>
                <p>提供详细的使用统计和分析，帮助您优化营销策略。</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

