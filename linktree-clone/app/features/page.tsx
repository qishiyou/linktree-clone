import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { QrCode, Smartphone, Link, BarChart3, Shield, Zap } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: <QrCode className="h-16 w-16 text-wechat-500" />,
      title: "动态二维码",
      description:
        "我们的智能二维码技术允许您随时更新链接目标，而无需更改已打印或分发的二维码。这为您的营销活动提供了极大的灵活性，让您能够快速响应市场变化，优化用户体验。支持URL重定向、文本、vCard等多种类型，满足不同场景的需求。",
    },
    {
      icon: <Smartphone className="h-16 w-16 text-wechat-500" />,
      title: "数字名片",
      description:
        "创建独特的数字名片，整合您的联系方式、社交媒体账号和专业成就。支持自定义设计和实时更新，让您在任何场合都能留下深刻的第一印象。我们的数字名片解决方案包括多种模板选择、个性化背景、互动元素等功能，帮助您展示最佳的专业形象。",
    },
    {
      icon: <Link className="h-16 w-16 text-wechat-500" />,
      title: "聚合链接",
      description:
        "通过单个链接展示您的所有在线存在。自定义您的页面外观，添加无限的链接，并实时跟踪访问统计。简化您的社交媒体营销，提高粉丝互动。我们的聚合链接平台支持各种主流社交媒体平台，并提供详细的访问分析，帮助您优化内容策略。",
    },
    {
      icon: <BarChart3 className="h-16 w-16 text-wechat-500" />,
      title: "详细分析",
      description:
        "获取详细的扫描统计，包括地理位置、设备类型和扫描时间。使用这些洞察来优化您的营销策略，提高转化率，并衡量活动的ROI。我们的分析仪表板提供直观的数据可视化，支持自定义报告生成和数据导出，让您轻松掌握营销效果。",
    },
    {
      icon: <Shield className="h-16 w-16 text-wechat-500" />,
      title: "安全保护",
      description:
        "我们的安全系统自动检测和阻止潜在的恶意链接，保护您的品牌声誉和用户安全。支持设置访问密码和地理限制，为敏感内容提供额外的保护层。我们还提供实时监控和警报系统，确保您的二维码始终安全可靠。",
    },
    {
      icon: <Zap className="h-16 w-16 text-wechat-500" />,
      title: "API集成",
      description:
        "通过我们强大的API，将二维码功能无缝集成到您的应用或工作流程中。支持批量生成、自动更新和高级自定义。我们提供详细的开发文档和示例代码，加速您的开发过程。API支持多种编程语言，并提供沙盒环境供开发者测试和调试。",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <section className="bg-wechat-50 py-12 md:py-24">
          <div className="container">
            <h1 className="text-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              强大功能，简单使用
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-center text-gray-500 md:text-xl">
              我们提供全面的二维码解决方案，助您轻松管理和优化营销活动
            </p>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container">
            <div className="space-y-12">
              {features.map((feature, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex items-center justify-center bg-wechat-100 p-8 md:w-1/3">
                        <div className="text-center">
                          {feature.icon}
                          <h3 className="mt-4 text-2xl font-bold">{feature.title}</h3>
                        </div>
                      </div>
                      <div className="flex items-center p-8 md:w-2/3">
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-wechat-50 py-12 md:py-24">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold">准备好开始了吗？</h2>
            <p className="mb-8 text-gray-500">立即注册，体验我们强大的二维码管理平台</p>
            <Button size="lg" className="bg-wechat-500 hover:bg-wechat-600">
              免费注册
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

